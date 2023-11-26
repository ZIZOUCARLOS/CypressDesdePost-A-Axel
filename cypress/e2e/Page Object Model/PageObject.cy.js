//Primer paso para utilizar la funcion importar la (Duncion creada en Pages../FreeRangerHome)
import FreeRangerHome from "../../Pages/FreeRangeHome";

const home = new FreeRangerHome

describe('Ejemolo de POM EN LA WEB fRRE range Testers', () => {
    beforeEach(() => {
        home.navigateToHome()
    });



    it('El boton empezar aprender existe', () => {
        // 2. REALIZAR UNA CONSTANTE
        // const home = new FreeRangerHome
        // home.navigateToHome(),
        home.empezarButton().should("exist")
        // home.clickAButtonEmpezar()
        home.empezarButton().click();
    });
});  

