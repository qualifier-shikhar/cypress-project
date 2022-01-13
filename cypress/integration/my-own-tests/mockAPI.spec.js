describe('Checking the API response', () => {
    it('verify global feeds like count', () => {
        cy.contains('Global Feed').click()
        cy.get('app-article-list button').then((listOfButtons) => {
            expect(listOfButtons[0].toggleAttribute.contain('1'))
            expect(listOfButtons[1].toggleAttribute.contain('5'))
        })
    })
})