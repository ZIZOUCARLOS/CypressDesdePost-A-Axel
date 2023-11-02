describe('', () => {
    
});
it('El Delete request funciona correctamente para el endpoint', () => {
    // Primero se coloca el metodo
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
});