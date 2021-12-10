/// <reference types="cypress" />

describe("Post Deletion", ()=> {
    it('verify deletion of post', ()=> {
        cy.signinToApplication()
        cy.contains('Global Feed').click()
        cy.contains('Jenkins Integration').click()
        cy.get('button[class="btn btn-sm btn-outline-danger"]').first().click()
        cy.contains('Your Feed').should('exist')
        cy.logoutToApplication()
    })
})
