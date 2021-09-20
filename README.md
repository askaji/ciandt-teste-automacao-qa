# Desafio - Teste de Automação para QA - Ci&T 

[Link do Desafio](https://github.com/dhiegobastos/qa-test)

Desafio realizado utilizando o Cypress + Cucumber.

# Ferramentas Utilizadas

* [VSCode](https://code.visualstudio.com/)
* [Node.js](https://nodejs.org/en/download/)
* [Cypress](https://www.cypress.io/)
* [Cucumber for Cypress](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

# Atividades a serem executadas:

* [FEITO] Primeira parte: automatizar o cenário de busca por questão inexistente, sendo que o Gherkin já está pronto.
* [TO DO] Segunda parte: criar o Gherkin e automatizar o cenário "Precisamos fazer uma busca na categoria por Science: Computers e verificar se a listagem de questões está com 25 itens e se o controle de paginação irá aparecer.".
* [TO DO] Terceira parte: criar o Gherkin e automatizar um cenário novo.


# Executando os testes

Link da aplicação testada: https://opentdb.com/

1. Baixar as dependências do package.json
```
npm install
```

2. Executar os testes
```
npx cypress open
```
(Opcional) Execução dos testes em modo headless
```
npx cypress run
```

# O que tem neste projeto?

* Automação dos cenários solicitados no link do desafio;
* Estrutura do repositório em Page Object;
* Uso do conceito de Trunk Based para a organização do repositório no Git.

# Roadmap

* Configurar o Cypress Dashboard;
* Configurar o Github Workflow.
