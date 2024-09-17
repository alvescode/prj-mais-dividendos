import pandas as pd
from sqlalchemy import create_engine
# from sqlalchemy.orm import sessionmaker


user = 'local_user'        
password = 'local_password'      
host = 'postgres'          
database = 'local_db'  
port=5432

connection_string = f'postgresql+psycopg://{user}:{password}@{host}:{port}/{database}'   

engine = create_engine(connection_string)
# Session = sessionmaker(bind=engine)

def envia_banco(df, table, write):
    try:
        if write == 'r':
            df.to_sql(table, con=engine, if_exists='replace', index=False)
        else:
            df.to_sql(table, con=engine, if_exists='append', index=False)
    except Exception as e:
        print(f"Erro ao enviar dados para o banco: {e}")

def trata_response1(response1):
    response1 = pd.DataFrame([response1])
    envia_banco(response1,'virtual','a')

def trata_response2(response1,response2):
    response2 = pd.DataFrame([response2])
    response2["ticker"] = response1["vticker"]
    envia_banco(response2,'prices','a')

def trata_response3(response1,response3):
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
    response3["ticker"] = response1["vticker"]
    if '2019' in response3.columns:
        response3.drop(columns=['2019'],inplace=True)
    envia_banco(response3,'dados_financeiros','a')

def trata_response4(response1,response4):

    for key in response4.keys():
        for year in response4[key]:
            if(year["value"]==None):
                year["value"] = float(0)
            elif(year["value"]=='-'):
                year["value"] = float(0)
            if isinstance(year['value'], str) and ',' in year['value']:#elif
                year['value'] = float(year['value'].replace(",", "."))
            
        key_df = pd.DataFrame(response4[key])
        key_df['ticker'] = response1['vticker']




        if 'company_id' not in key_df.keys():    
            key_df['company_id'] = float(response1['vcompanyId'])
        if 'ticker_id' not in key_df.keys():
            key_df['ticker_id'] = float(response1['vid'])

        envia_banco(key_df,'indicadores','a')
            
def trata_response5(response1,response5):
    df = pd.DataFrame(response5)
    df["Ticker"] = response1["vticker"]
    envia_banco(df,'dividendos','a')
    return response5

def trata_response6(response1,response6):
    df = pd.DataFrame(response6)
    df["Ticker"] = response1["vticker"]
    envia_banco(df,'dividend_y','a')
    return response6
