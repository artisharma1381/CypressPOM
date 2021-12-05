/// <reference types="cypress" />

import HomePageActions from "../../pageObjects/pageObjectActions/HomePageActions"

// const homePage = new HomePageActions()


describe ("Login as bank Manager", ()=>{
    const homePage = new HomePageActions()

    beforeEach(()=>{
        homePage.navigateToURL()

    })

    it("Validate Title of Home page", ()=>{
        homePage.validateTitle().should('eq','Protractor practice website - Banking App')
    })



    it("Validate login as Bank Manager", ()=>{
        homePage.loginAsBankManager()
    })




})