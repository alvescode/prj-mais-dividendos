# Mais Dividendos

Mais Dividendos é uma aplicação de gerenciamento de carteiras de investimentos de ações, construída com uma arquitetura de microsserviços. 

## Arquitetura

O projeto segue uma abordagem de microsserviços, onde:
- **postgres**: Container Postgres que persiste os dados na pasta infra/data .
- **pgadmin**: Interface gráfica para administração de bancos de dados Postgres. Com o pgAdmin, é possível gerenciar e monitorar o banco de dados Postgres, executar consultas SQL e visualizar tabelas e esquemas de maneira simplificada.
- **update_data_service**: Realiza web-scraping online para buscar dados atualizados diariamente do mercado brasileiro de ações. Persiste os dados encontrados no banco de dados Postgres.
- **frontend_service**: Responsável pela interface gráfica, exibindo os dados das ações e permitindo a interação do usuário.
- **stock-api-service**: Responsável pelo fornecimento de dados das ações provenientes do microsserviço Postgres.
- **authentication_authorization_service**: EM CONSTRUÇÃO

### Endpoints Disponíveis

Atualmente, a API oferece o seguinte endpoint:

- `GET /api/stock/{ticker}`: Retorna o preço atual de uma ação de um banco de dados Postgres.
- `GET /api/stock/prices`: Retorna o preço atual de uma lista de ações.

### URLs

- **Frontend**: Acesse a interface de usuário em [http://localhost:3000](http://localhost:3000)
- **Stock API**: Acesse o endpoint da API em [http://localhost:8080/api/stock/{ticker}](http://localhost:8080/api/stock/{ticker}) 
    -  você pode usar como exemplo: http://localhost:8080/api/stock/LREN3 ou http://localhost:8080/api/stock/PETR4
- **PGAdmin**: Acessível via navegador na URL http://localhost:5050.

## Requisitos

- Linux (ou um ambiente compatível com bash). **estamos trabalhando para facilitar a execução em outros ambientes**  
- Docker instalado

## Execução

1. Clone o Repositório em sua máquina local:
    ```bash
    git clone https://github.com/alvescode/prj-mais-dividendos
    ```

Para executar o projeto, siga os seguintes passos:

2. Acesse a pasta `infra`:
    ```bash
    cd prj-mais-dividendos/Desenvolvimento/3.Implementacao/infra
    ```

3. Execute o script bash para iniciar os serviços:
    ```bash
    ./execute-service
    ```

Esse script irá configurar todos os microsserviços, incluindo o backend que faz o scraping dos dados das ações e o frontend que exibe essas informações.

## Observações

- O projeto está preparado para ser executado em um ambiente Docker.
- Certifique-se de que as portas **3000** (frontend) e **8080** (API backend) estejam disponíveis.
- O web scraping é feito em tempo real para garantir que o preço exibido seja o mais atualizado possível, entretanto, os dados são persistidos na pasta infra/data/postgres/ criada e mantida como um volume pelo docker, possibilitando que o script de atualização seja executado apenas uma vez.

## AWS -  Diagrama de Arquitetura

![Diagrama AWS](https://frontend-mais-dividendos.s3.us-east-1.amazonaws.com/aws-diagram.jpeg)

