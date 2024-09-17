import pandas as pd
import asyncio
import httpx
import json
import os
from functions import trata_response3,trata_response1,trata_response2,trata_response4,trata_response5,trata_response6
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
    
        trata_response1(data['response1'])
        trata_response2(data["response1"],data["response2"])
        trata_response3(data["response1"],data["response3"])
        trata_response4(data["response1"],data["response4"])
        trata_response5(data["response1"],data["response5"])
        trata_response6(data["response1"],data["response6"])
    
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
