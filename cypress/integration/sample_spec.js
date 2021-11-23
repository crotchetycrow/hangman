Cypress.on('uncaught:exception', (err, runnable) => {
  // because we are exporting Hangman for Jest testing
  // we expect 'ReferenceError: module is not defined'
  // and don't want to fail the test so we return false
  if (err.message.includes('module is not defined')) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})

describe('My first test', function () {
  it('Visits our hangman page', () => {
    cy.visit('../../main/index.html')
  })
})
