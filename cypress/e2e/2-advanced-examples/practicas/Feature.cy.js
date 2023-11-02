// se utiliza para guardar datos en la carpeta creada en fixture
describe('Ejemplo con Feature', () => {
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.fixture("credenciales").then(function(testdata){
            this.testdata = testdata
        })
    });
    it('Validar el login', function () {
        cy.get('#username').type(this.testdata.username)
        cy.get('#password').type(this.testdata.password)
        cy.get('form').contains("Login").click()
        cy.url().should("contain", "/secure");
        ;
    });
});

// function name(params) {
    
// }