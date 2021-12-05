/// <reference types="cypress" />

import AddCustomerActions from "../../pageObjects/pageObjectActions/AddCustomerActions"
import HomePageActions from "../../pageObjects/pageObjectActions/HomePageActions";

// const homePage = new HomePageActions()


describe ("Adding a new customer", ()=>{
    const addCustomer = new AddCustomerActions()
    const homePage = new HomePageActions()

    before(()=>{
        cy.fixture('testData').then((data)=>{
            globalThis.data = data
        })

    })


    beforeEach(()=>{
        homePage.navigateToURL()

    })

    it("Add customer detail", ()=>{
        homePage.loginAsBankManager()
        addCustomer.addCustomerDetail(data.firstName,data.lastName,data.postCode)
        addCustomer.validateAlert(data.alertMsg)

    })



})