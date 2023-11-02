class FreeRangerHome {
    //Se pasa a escribir el metodo(Navegacion)
    navigateToHome(){
        cy.visit('https://www.freerangetesters.com/');
    }
    //Metodo para ir al boton(Locaitors)
    empezarButton(){
        return cy.get('#comp-krjarw4p > [data-testid="linKElement"] > ._1qjd7');
    }

    //Acciones sobre los elementos
    clickAButtonEmpezar(){
        this.empezarButton().click
    }

}
// Se debe exportar la clase para poder utilizar los mtodos o funciones
export default FreeRangerHome