Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Gilvan')
    cy.get('#lastName').type('Sousa')
    cy.get('#email').type('gilvan.sousa@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})