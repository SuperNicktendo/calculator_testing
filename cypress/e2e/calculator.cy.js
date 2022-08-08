describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the running total with number commands', () => {
    cy.get('#number3').click();
    cy.get('#number1').click();
    cy.get('.display').should('contain', '31');
  })

  it('should update the running total with arithmetical commands', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '4');

  })

  it('should chain multiple operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '21');

  })

  it('should display decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '1.5');

  })

  it('should display negative number', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-5');
  })

  it('should display large number', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1000000');

  })

  it('should be able to use negative number in calculation', () => {
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
  })

  it('should display error when dividing by zero', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error')
  })

})