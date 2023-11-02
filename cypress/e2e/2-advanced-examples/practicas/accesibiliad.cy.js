// Se utiliza para realizar pruebas de la pagina web, para personas que no tienen acceso al codigo 
//Dependencia axe core y cypress axe

//primero se debe importar la libreria con : import "cypress-axe"
import "cypress-axe"

describe('Prueba de accesiblidad', () => {
 it('Deberia de cumplir con los estandares de accesibilidad', () => {
 cy.visit('https://www.freerangetesters.com/');
    cy.injectAxe()
    cy.checkA11y()//comando que proporciona la libreria instalada  (Aqui se puede psar el id del web webelement que se quiere testiar de manera individual )
    // cy.checkA11y()(Aqui se puede psar el id del web webelement que se quiere testiar de manera individual )
    // cy.checkA11y("head")Se puede utilizar para ver el nivel de severidad de un WEBELEMENT
 });
 });

