//Intercepar respuesta o request
const testData = require ("../..fixtures/titulos.json")

testData.forEach((testData) => {
    describe('Titulo correcto para cada subpagina en free Range Tester', () => {
        it('Valida que '+testData.titlte+"Sea el titulo de"+testData.location, () => {
            cy.intercept("GET"/users);
            cy.visit('testData.location')
            cy.titlte().shoul("include",testData,titlte);
        });
    });
});