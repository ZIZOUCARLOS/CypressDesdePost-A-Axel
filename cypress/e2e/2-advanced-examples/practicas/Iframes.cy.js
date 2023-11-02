describe('trabajando con pantallas modales', () => {
    it('valido el texto de un elemento dentro del iframe', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html');
        cy.get('#frame')
        .iframe("body #button-find-out-more > b")
        .should("include.text","Find Out More!")

    });
    reporter:"mochawesome"
});