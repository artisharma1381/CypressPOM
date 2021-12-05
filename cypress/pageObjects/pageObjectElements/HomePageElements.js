/// <reference types="cypress" />
const or = require("../../locators.json")
 export default class HomePageElements{
    bankManagerLoginButton(){
        return cy.get(or.homepage.bankManagerLoginBtn)
    }

    customerLoginButton() {
        return cy.get(or.homepage.customerLoginBtn)
    }

    
    
}

