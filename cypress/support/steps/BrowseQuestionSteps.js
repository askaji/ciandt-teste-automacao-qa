import HomePage from '../pageObjects/HomePage';
import BrowseQuestionPage from '../pageObjects/BrowseQuestionPage';
const homePage = new HomePage;
const browseQuestionPage = new BrowseQuestionPage;

Given("que navego para a página de busca do banco de questões", () => {
    browseQuestionPage.acessarPaginaDeBuscaPorQuestoes();
})

Given("digito {string} no campo de busca", (texto) => {
    browseQuestionPage.digitarTextoNoCampoBusca(texto);
})

When("clico no botão de buscar", () => {
    browseQuestionPage.clicarBotaoBuscar();
})

Then("visualizo uma mensagem de erro com o texto {string}", (texto) => {
    browseQuestionPage.visualizarTextoNoAlertaDeErro(texto);
})