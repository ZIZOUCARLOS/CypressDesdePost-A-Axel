describe('Prueba flujo de compra checkout', () => {
    before(() => {
        cy.log('Se realiza una serie de paso antes de realizar el flujo de compra correcto en checkout');
        cy.viewport(1400,900);
        cy.visit('https://cencopay--blaistenqaio.myvtex.com/checkout#/cart')

    });
    // beforeEach(() => {
    //     cy.visit('https://cencopay--blaistenqaio.myvtex.com/checkout#/cart')
    //     cy.viewport(1400,900);
    // });
    it('Agrera productos al carrito', () => {
        cy.wait(9000)
        cy.get('.flex').click()
        cy.get('.overflow-auto > :nth-child(1) > :nth-child(3)').click()
        cy.get('#skuIds').click().type("1278231")
        cy.get('#sellerId').click().type("blaistenqaiob180floresta")
        cy.get('.vtex-button').click()
        cy.get('#render-cartman > div > button').click()
        cy.get('#cart-to-orderform').click()
        cy.get('#client-pre-email').type("tatauyvtex@gmail.com")
        cy.get('#btn-client-pre-email').click()
        cy.wait(3000)
        cy.get('#client-email').click()
        cy.wait(3000)
        cy.get('#client-first-name').click().type("Wilfred Alejandro")
        cy.get('#client-last-name').click().type("Rodriguez")
        cy.get('#client-document').click().type("96589236")
        cy.get('[data-bind="visible: !hasDifferentPhone()"] > .input > #client-phone1').click().type("11")
        cy.get('[data-bind="visible: !hasDifferentPhone()"] > .input > #client-phone3').click().type("22514980")
        cy.get('#go-to-shipping').click()
        //opciones de envio
        // cy.get('#shipping-option-delivery').check()
        // //Puntos de retiro
        // cy.get('#shipping-option-pickup-in-point').check()
        // cy.get('#find-pickups-manualy-button').cklick()
        cy.get('#find-pickups-manualy-button').click()
        cy.get('.pac-target-input').click().type("Blaisten Floresta")
        cy.wait(2000)
        cy.get('.pac-container > :nth-child(1)').click()
        cy.get('.vtex-pickup-points-modal-3-x-pickupPointMain').click()
        cy.get('#confirm-pickup-Retiro-en-Tienda-B180').click()
        cy.get('#btn-go-to-payment').click()
        cy.get(':nth-child(5) > .react-datepicker__day--027').click()
        cy.get('#btn-go-to-payment').debug().click()

        cy.get('#payment-data > div > div.accordion-body.collapse.in.payment-body > div > div.box-step > div.box-step-content > form.form-step.box-new.row-fluid > div > p > button').debug().click().debug()
        cy.wait(9000)
        // // cy.get('.button > .submit > span').click()
        // // // cy.get('#btn-go-to-payment').click()
        // // // // cy.get('.button > .submit').click()
        // // // // // cy.get('.button > .submit').click()
        // // // // // cy.wait(30000)
        
    });


    });
