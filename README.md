# Mais Dividendos

Mais Dividendos é uma aplicação de gerenciamento de carteiras de investimentos, construída com uma arquitetura de microsserviços. O backend fornece dados financeiros de ações, realizando web scraping para capturar o preço atual de uma ação. O frontend exibe essas informações de forma acessível para o usuário final.

## Arquitetura

O projeto segue uma abordagem de microsserviços, onde:

- **update_data_service**: Expondo um endpoint para buscar o preço de ações com base no ticker fornecido, após realizar web scraping online.
- **frontend_service**: Responsável pela interface gráfica, exibindo os dados das ações e permitindo a interação do usuário.
- **stock-api-service**: Responsável pelo fornecimento de dados das ações mais atualizados provenientes de um banco de dados Postgres levantado no arquivo infra/compose.yml.
- **authentication_authorization_service**: EM CONSTRUÇÃO

### Endpoints Disponíveis

Atualmente, a API oferece o seguinte endpoint:

- `GET /api/stock/{ticker}`: Retorna o preço atual de uma ação de um banco de dados Postgres.

### URLs

- **Frontend**: Acesse a interface de usuário em [http://localhost:3000](http://localhost:3000) ( Não é iniciada automaticamente AINDA)
  - Acesse a pasta services/front-end/mais-dividendos-dashboard e digite (em um novo terminal) `npm run install && npm run build && npm run start` 
- **Stock API**: Acesse o endpoint da API em [http://localhost:8080/api/stock/{ticker}](http://localhost:8080/api/stock/{ticker}) (iniciado automaticamente com a execução do script a seguir)
    -  você pode usar como exemplo: http://localhost:8080/api/stock/LREN3 ou http://localhost:8080/api/stock/PETR4

## Requisitos

- Linux (ou um ambiente compatível com bash). **estamos trabalhando para facilitar a execução em outros ambientes**  
- Docker instalado

## Execução

Para executar o projeto, siga os seguintes passos:

1. Acesse a pasta `infra` (na pasta /Desenvolvimento/3.Implementação/):
    ```bash
    cd infra
    ```

2. Execute o script bash para iniciar os serviços:
    ```bash
    ./execute-service
    ```

Esse script irá configurar todos os microsserviços, incluindo o backend que faz o scraping dos dados das ações e o frontend que exibe essas informações.

## Observações

- O projeto está preparado para ser executado em um ambiente Docker.
- Certifique-se de que as portas **3000** (frontend) e **8080** (API backend) estejam disponíveis.
- O web scraping é feito em tempo real para garantir que o preço exibido seja o mais atualizado possível, entretanto, os dados são persistidos na pasta infra/data/postgres/ criada e mantida como um volume pelo docker, possibilitando que o script de atualização seja executado apenas uma vez.
