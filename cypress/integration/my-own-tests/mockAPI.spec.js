describe('Test with Backend', () => {
    beforeEach('login to app', () => {
        cy.intercept('GET', '**/tags', {fixture:'tags.json'})
        cy.signinToApplication()
    })
    
    it.skip('verify correct request and response', () => {
        cy.intercept('POST', '**/articles').as('postArticles')

        cy.contains('New Article').click()
        cy.get('[ng-reflect-name="title"]').type('Jenk')

        cy.get('[ng-reflect-name="description"]').type('Description to Jenkins')

        cy.get('[ng-reflect-name="body"]').type('This is just a title to Jnenkins')

        cy.get('input[type="text"][placeholder="Enter tags"]').type('jenkins{enter}')
        cy.get('input[type="text"][placeholder="Enter tags"]').type('ci/cd{enter}')
        cy.get('input[type="text"][placeholder="Enter tags"]').type('pipelines{enter}')
        
        cy.contains('Publish Article').click()
        
        cy.get('button[class="btn btn-sm btn-outline-danger"]').should('exist')

        //wait until postArticles completes
        cy.wait('@postArticles')
        cy.get('@postArticles').then( xhr => {
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(200)
            // expect(xhr.request).to.equal(200)
            // expect(xhr.status).to.equal(200)
        })
    })

    it('should have tags routing object', () => {
        cy.get('.tag-list')
        .should('contain', 'cypress')
        .and('contain', 'automation')
        .and('contain', 'testing')
    })

    it('verify global feeds like count', () => {
        cy.intercept('GET', '**/articles/feed*', {"articles":[], "articlesCount":0})
        cy.intercept('GET', '**/articles*', {fixture: 'articles.json'})

        cy.contains('Global Feed').click()
        cy.get('app-article-list button').then((listOfButtons) => {
            expect(listOfButtons[0]).to.contain('1')
            expect(listOfButtons[1]).to.contain('5')
        })

        //articles is the file name
        cy.fixture('articles').then( file => {
            const articleLink = file.articles[1].slug
            cy.intercept('POST', '**/articles'+articleLink+'/favourite', file)
        })

        cy.get('app-article-list button')
        .eq(1)
        .click()
        .should('contain', '6')
    })
})