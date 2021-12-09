/// <reference types="cypress" />

describe("Basic Test", ()=> {
    before(() => {
        cy.visit('/')
    })

    it.only('Correct Title', ()=> {
        cy.loginToApplication()
        cy.title().should('eq', 'Conduit')
        // cy.logoutToApplication()
    })

    it('verify correct request and response', ()=> {
        cy.contains('New Article').click()
        cy.get('[ng-reflect-name="title"]').type('Test title')
        cy.get('[ng-reflect-name="description"]').type('This is a about title')
        cy.get('[ng-reflect-name="body"]').type('This is just a title')
        cy.contains('Publish Article').click()
    })
})