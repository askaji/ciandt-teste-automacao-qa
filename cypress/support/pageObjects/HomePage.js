/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements';

const homeElements = new HomeElements;
const url = Cypress.config("baseUrl");

class HomePage {
    acessarPaginaDeBuscaPorQuestoes() {
        cy.visit(url);
        cy.get(homeElements.botaoBrowse()).click();
    }
}

export default HomePage;