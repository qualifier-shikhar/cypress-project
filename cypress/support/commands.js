// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('signinToApplication', ()=> {
    cy.visit('/login')
    cy.get('[placeholder="Email"]').type(Cypress.env('username'))
    cy.get('[placeholder="Password"]').type(Cypress.env('password'))
    cy.get('button[class="btn btn-lg btn-primary pull-xs-right"]').click()
})

Cypress.Commands.add('logoutToApplication', ()=> {
    cy.visit('/settings')
    cy.contains('Or click here to Sign Out').click()
})

Cypress.Commands.add('signUpToApplication', () => {
    cy.visit('/')
    cy.get('.container > .nav > :nth-child(3) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').clear();
    cy.get(':nth-child(1) > .form-control').type('srj123');
    cy.get(':nth-child(2) > .form-control').clear();
    cy.get(':nth-child(2) > .form-control').type('srj123@gmail.com');
    cy.get(':nth-child(3) > .form-control').clear();
    cy.get(':nth-child(3) > .form-control').type('srj123');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('have.text', ' srj123 ');
    cy.get('.container > .nav > :nth-child(2) > .nav-link').should('have.attr', 'routerlink', '/editor');
})
