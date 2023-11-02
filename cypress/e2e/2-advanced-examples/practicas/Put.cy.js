describe('', () => {
    
});
it('El post request funciona correctamente para el enpoint',() => {
    //colocar metodo PUT, ES UN TERMINO MATEMATICO QUE D COMO RESULTADO EL MISMO
    cy.request( "PUT", "https://jsonplaceholder.typicode.com/posts",{
    userId:1,
    id:101,
    title:"Relatos salvajes",
    body:"Una pelicula argentina"
    }).then((respuesta) => {
    expect(respuesta.body).to.have.property("title","Relatos salvajes")  
    });
});