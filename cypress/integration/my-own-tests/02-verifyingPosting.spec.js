/// <reference types="cypress" />

describe("Post Creation & Deletion", ()=> {
    beforeEach(() => {
        const userName = Cypress.env('username')
        const password = Cypress.env('password')
        cy.signinToApplication(userName, password)
        
    })
    it('verify creation of post', ()=> {
        cy.visit('/')
        cy.wait(5000)
        cy.contains('New Article').click()
        cy.get('[ng-reflect-name="title"]').type('Jenkins Integration')

        cy.get('[ng-reflect-name="description"]').type('Integrate to Jenkins')

        cy.get('[ng-reflect-name="body"]').type('This is just a title')

        cy.get('input[type="text"][placeholder="Enter tags"]').type('jenkins{enter}')
        cy.get('input[type="text"][placeholder="Enter tags"]').type('ci/cd{enter}')
        cy.get('input[type="text"][placeholder="Enter tags"]').type('pipelines{enter}')
        
        cy.contains('Publish Article').click().wait(5000)

        cy.get('button[class="btn btn-sm btn-outline-danger"]').should('exist')
    })

    it('verify deletion of post', ()=> {
        cy.visit('/')
        cy.wait(5000)
        cy.contains('Global Feed').click()
        cy.contains('Jenkins Integration').click()
        cy.get('button[class="btn btn-sm btn-outline-danger"]').first().click()
        cy.contains('Your Feed').should('exist')
        cy.logoutToApplication()
    })
})