import pandas as pd
import asyncio
import httpx
import json
import os
from functions import trata_dados_financeiros,trata_dados_do_ticker,trata_preco_da_acao,trata_dados_indicadores,trata_dados_dividendos,trata_dados_dividend_yeld
node_port = os.getenv('node_port')

async def fetch(url,timeout=500):
    async with httpx.AsyncClient() as client:
        response = await client.get(url,timeout=timeout)
        return response.text
    
async def get_data(stock):
    url = f'http://node-service:{node_port}/data?acao={stock}'
    print(url)
    result = await fetch(url)
    return result
   
tickers = pd.read_csv('tickers-b3.csv')["Ticker"].to_list()

def main():
    for t in tickers:
        main_result = asyncio.run(get_data(t))
        data = json.loads(main_result)
        print(f'Dados Recebidos para {t}.')
        print(data["dados_do_ticker"])
        trata_dados_do_ticker(data["dados_do_ticker"])
        trata_preco_da_acao(data["dados_do_ticker"]["vticker"],data["dados_preco_da_acao"])
        trata_dados_financeiros(data["dados_do_ticker"]["vticker"],data["dados_financeiros"])
        trata_dados_indicadores(data["dados_do_ticker"],data["dados_indicadores"])
        trata_dados_dividendos(data["dados_do_ticker"]["vticker"],data["dados_dividendos"])
        trata_dados_dividend_yeld(data["dados_do_ticker"]["vticker"],data["dados_dividend_yeld"])
    
    print('Tarefa Terminou.')
    while True:
        user_input = str(input('Deseja Sair? (S) ou (H) para informações. Digite C para continuar.'))
        if(user_input=='S'):
            break
        elif(user_input=='H'):
            print('em construção')
        else:
            continue
      
main()
