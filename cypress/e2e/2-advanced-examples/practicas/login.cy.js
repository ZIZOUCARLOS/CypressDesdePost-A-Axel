describe('Sin loguar', () => {
    it('SIN LOGUAR', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth');
        cy.get('P').should("include.text","Congratulations");
    });
    it('Logua usando auth de Cypress', () => {
        //loguarse con auth que cypress tiene configurado/manera correcta
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            auth:{
                username:"admin",
                password: "admin"
            }
        });
        cy.get('P').should("include.text","Congratulations");
    });

it('Con credenciales en la URL', () => {
    //Validacion con admin:admin@- otra manera de loguarse
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.get('P').should("include.text","Congratulations");
});
it('Hago un login en un form, usando un request del tipo Post', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.request({
        method: 'post',
        url: '/authenticate',
        form: true,
        body:{
            username:"tomsmith",
            password:"SuperSecretPassword!"
        }
    });
    cy.getCookie("rack.session").should("exist")
    cy.visit('https://the-internet.herokuapp.com/secure');
    cy.get('.subheader').should("include.text","Welcome to the Secure Area.");
});
//login de comando personalizazo en commands
it('MIsmo Test de arriba pero con el login de comando personalizado', () => {
    cy.login()
    cy.get('.subheader').should("include.text","Welcome to the Secure Area.")
});
});