/// <reference types="cypress" />

describe("Basic Test", ()=> {
    before(() => {
        cy.visit('/')
    })

    it('Correct Title', ()=> {
        cy.title().should('eq', 'Conduit')
    })

    it('Verify Sign In functionality', ()=> {
        cy.signinToApplication()
        cy.get('a[routerlink="/editor"]').should('exist')
    })
})
