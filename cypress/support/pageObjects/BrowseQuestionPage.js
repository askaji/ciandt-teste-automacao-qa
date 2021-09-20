/// <reference types="Cypress" />

import BrowseQuestionElements from '../elements/BrowseQuestionElements';

const browseQuestionElements = new BrowseQuestionElements;

class BrowseQuestionPage {
    digitarTextoNoCampoBusca(texto) {
        cy.get(browseQuestionElements.campoBusca()).type(texto);
    }
    
    clicarBotaoBuscar() {
        cy.get(browseQuestionElements.botaoBuscar()).click();
    }

    visualizarTextoNoAlertaDeErro(texto) {
        cy.get(browseQuestionElements.alertaErroNaBusca()).should('contain', texto)
    }
}

export default BrowseQuestionPage;