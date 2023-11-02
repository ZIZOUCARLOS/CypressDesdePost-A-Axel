//Iframe comando
Cypress.Commands.add("iframe", { prevSubject: "element" }, ($iframe, selector) => {
    Cypress.log({
      name: "iframe",
      consoleProps() {
        return {
          iframe: $iframe
        };
      }
    });
    return new Cypress.Promise((resolve) => {
      resolve($iframe.contents().find(selector));
    });
  });
  Cypress.Commands.add('login', () => {
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
  });

//comando para abrir una nueva venta y quieres que la ventana aparezca en la misma pagina o abseder a esa ventana 
  Cypress.Commands.add('visitInsameTab', (url) => {
    cy.on("window:bwfore:load",(win)=>{
      cy.stub(win,"open").as("windowOpen").callsFake(()=>{
        cy.visit(url)
      })
    })
    
  });