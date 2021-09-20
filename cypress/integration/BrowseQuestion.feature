Feature: Busca no Banco de Questões

    Scenario: Busca por questão inexistente
        Given que navego para a página de busca do banco de questões
        And digito "Science: Computers" no campo de busca
        When clico no botão de buscar
        Then visualizo uma mensagem de erro com o texto "No questions found."