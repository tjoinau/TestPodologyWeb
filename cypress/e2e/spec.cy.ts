describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
    cy.wait(5000)
    cy.get('mat-select[id=SelectHCP]').click()
    cy.get('mat-option').contains('Joinau Thomas').click()
  })
})