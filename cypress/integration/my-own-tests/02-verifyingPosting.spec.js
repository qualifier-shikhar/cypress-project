/// <reference types="cypress" />

describe("Post Creation & Deletion", ()=> {
    it('verify creation of post', ()=> {
        cy.signinToApplication()
        cy.contains('New Article').click()
        cy.get('[ng-reflect-name="title"]').type('Jenkins Integration')

        cy.get('[ng-reflect-name="description"]').type('Integrate to Jenkins')

        cy.get('[ng-reflect-name="body"]').type('This is just a title')

        cy.get('input[type="text"][placeholder="Enter tags"]').type('jenkins{enter}')
        cy.get('input[type="text"][placeholder="Enter tags"]').type('ci/cd{enter}')
        cy.get('input[type="text"][placeholder="Enter tags"]').type('pipelines{enter}')

        cy.contains('Publish Article').click()

        cy.get('button[class="btn btn-sm btn-outline-danger"]').should('exist')
    })

    it('verify deletion of post', ()=> {
        cy.signinToApplication()
        cy.contains('Global Feed').click()
        cy.contains('Jenkins Integration').click()
        cy.get('button[class="btn btn-sm btn-outline-danger"]').first().click()
        cy.contains('Your Feed').should('exist')
        cy.logoutToApplication()
    })
})
