/// <reference types="cypress" />
const or = require("../../locators.json")
 export default class AddCustomerPageElements{

    addCustomerButton(){
        return cy.get(or.addcustomerpage.addcustomerbtn)
    }

    firstNameField() {
        return cy.get(or.addcustomerpage.firstname)
    }

    lastNameField() {
        return cy.get(or.addcustomerpage.lastname)
    }

    postCodeField() {
        return cy.get(or.addcustomerpage.postcode)
    }

    addCustomerSubmitBtn() {
        return cy.get(or.addcustomerpage.addcustsubmit)
    }


    
   
}

