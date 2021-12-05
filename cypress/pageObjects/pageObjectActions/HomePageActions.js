/// <reference types="cypress" />

import HomePageElements from "../pageObjectElements/HomePageElements"


export default class HomePageActions  {
    
    // element  = new HomePageElements()


    constructor(){
        this.element = new HomePageElements()
        
    }



    navigateToURL() {
        cy.visit('/')
    }


    validateTitle(){
        return cy.title()
    }

    loginAsBankManager(){
        this.element.bankManagerLoginButton().click();
      
    }

    loginAsCustomer(){
        this.element.customerLoginButton().click()
      }
}