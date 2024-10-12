import pandas as pd
from sqlalchemy import create_engine, text
# from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os
load_dotenv()

postgres_user = os.getenv('postgres_user')
postgres_password =os.getenv('postgres_password')
postgres_host =os.getenv('postgres_host')
postgres_database =os.getenv('postgres_database')
postgres_port=os.getenv('postgres_port')

connection_string = f'postgresql+psycopg://{postgres_user}:{postgres_password}@{postgres_host}:{postgres_port}/{postgres_database}'   

engine = create_engine(connection_string)
# Session = sessionmaker(bind=engine)

def envia_df_para_banco(df, table, write):
    try:
        if write == 'r':
            df.to_sql(table, con=engine, if_exists='replace', index=False)
        else:
            df.to_sql(table, con=engine, if_exists='append', index=False)
    except Exception as e:
        print(f"Erro ao enviar dados para o banco: {e}")

def trata_dados_do_ticker(response1):
    response1 = pd.DataFrame([response1])
    print(response1)
    envia_df_para_banco(response1,'virtual','r')

def trata_preco_da_acao(vticker, response2):
    response2 = pd.DataFrame([response2])
    response2["ticker"] = vticker 
    print(response2)
    envia_df_para_banco(response2, 'prices', 'a')

def trata_dados_financeiros(vticker,response3):
    cabecalho = response3[0]
    cabecalho[1] = 'Últ. 12M'
    sufixv = 1
    sufixh = 1
    for index,i in enumerate(cabecalho):
        if(i=='AV %'):
            cabecalho[index] = f'AV_{sufixv} %'
            sufixv += 1
        if(i=='AH %'):
            cabecalho[index]= f'AH_{sufixh} %'
            sufixh += 1
    response3 = pd.DataFrame(response3[1:],columns=cabecalho)
    response3["ticker"] = vticker
    if '2019' in response3.columns:
        response3.drop(columns=['2019'],inplace=True)
    envia_df_para_banco(response3,'dados_financeiros','r')

def trata_dados_indicadores(response1,response4):

    for key in response4.keys():
        for year in response4[key]:
            if(year["value"]==None) or (year["value"]=='-') :
                year["value"] = float(0)
            if isinstance(year['value'], str) and ',' in year['value']:
                year['value'] = float(year['value'].replace(",", "."))
            
        key_df = pd.DataFrame(response4[key])
        key_df['ticker'] = response1['vticker']

        if 'company_id' not in key_df.keys():    
            key_df['company_id'] = float(response1['vcompanyId'])
        if 'ticker_id' not in key_df.keys():
            key_df['ticker_id'] = float(response1['vid'])

        envia_df_para_banco(key_df,'indicadores','r')
            
def trata_dados_dividendos(vticker,response5):
    df = pd.DataFrame(response5)
    df["Ticker"] = vticker
    envia_df_para_banco(df,'dividendos','r')
    return response5

def trata_dados_dividend_yeld(vticker,response6):
    df = pd.DataFrame(response6)
    df["Ticker"] = vticker
    envia_df_para_banco(df,'dividend_y','r')
    return response6
