describe('prueba de API con Cypress', () => {
    // it('El endpoint responde con status 200', () => {
    // cy.request({
    //  url: 'https://jsonplaceholder.typicode.com/posts/1',

    // }).then((Respuesta)=>{
    // expect(Respuesta.status).to.eq(200)
    // });
    // });
    // it('el endpoint "Posts" tiene 100 entradas', () => {
    //  cy.visit('https://jsonplaceholder.typicode.com')
    // cy.request("/posts")
    // .its("body")
    // .should("have. length",100)
    
    // });
    // it(' E post numero 1 tiene de titulo sunt aut facere repellat provident occaecati excepturi optio reprehenderit"', () => {
    // cy.visit('https://jsonplaceholder.typicode.com')
    // cy.request("/posts/1")
    // .its("body")
    // .should("have. property", "title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    //  });
//////////////////////////////////// METODO pOST////////////////////////////////////////////////////////////////////////////

 it('El post request funciona correctamente para el enpoint',() => {
//colocar metodo post, SIRVE PARA CREAR UN REGISTRO
cy.request( "POST", "https://jsonplaceholder.typicode.com/posts",{
userId:1,
id:101,
title:"Relatos salvajes",
body:"Una pelicula argentina"
}).then((respuesta) => {
expect(respuesta.body).to.have.property("title","Relatos salvajes")  
});
});

});