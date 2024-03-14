/// <reference types="cypress" />

describe('Web functionalites of home page', () =>{

    it('tests the buttons of the website', () =>{

        cy.visit('https://amconsulting.company')
        cy.contains('Explore')
        cy.get('.flex-col > a > .flex').click()
        cy.get('.flex-row-reverse > .md\:items-center > .md\:flex > .flex').click()
    })

})