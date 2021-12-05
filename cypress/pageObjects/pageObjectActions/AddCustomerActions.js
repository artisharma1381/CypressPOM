/// <reference types="cypress" />

import AddCustomerPageElements from "../pageObjectElements/AddCustomerPageElements";

export default class AddCustomerActions  {
    
    // element  = new AddCustomerPageElements

    constructor(){
        this.element = new AddCustomerPageElements
        
    }


    addCustomerDetail(fName,lName,postCode){
        this.element.addCustomerButton().click()
        this.element.firstNameField().clear().type(fName)
        this.element.lastNameField().clear().type(lName)
        this.element.postCodeField().clear().type(postCode)
        this.element.addCustomerSubmitBtn().click()

    }

    validateAlert(alertMessage){
        cy.on('window:alert',(alertText)=>{
            expect(alertText).contains(alertMessage)

        })
    }


}