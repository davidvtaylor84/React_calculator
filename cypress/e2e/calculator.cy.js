describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('update the display of the running total',() =>{
    cy.get('#number2').click();
    cy.get('#operator_add').click()
    cy.get('#number4').click();
    cy.get('#operator_add').click()
    cy.get('#number4').click();
    cy.get('#operator_add').click()
    cy.get('.display').should('contain', '10')
  })

  it('can chain multiple operations',() =>{
    cy.get('#number4').click();
    cy.get('#operator_add').click()
    cy.get('#number5').click();
    cy.get('#operator-multiply').click()
    cy.get('#number6').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '54')
  })

  it('can take in positive numbers', ()=>{
    cy.get('#number8').click();
    cy.get('#operator-subtract').click()
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
  })

  it('can take in negative numbers', ()=>{
    cy.get('#number4').click();
    cy.get('#decimal').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click()
    cy.get('#number9').click();
    cy.get('#number6').click();
    cy.get('#number3').click();
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-963173.6')
  })

  it('can use decimal numbers',()=>{
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number6').click();
    cy.get('#operator_add').click()
    cy.get('#number6').click();
    cy.get('#decimal').click();
    cy.get('#number8').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '10.47')
  })

  it('can use very large numbers', ()=>{
    cy.get('#number4').click();
    cy.get('#number9').click();
    cy.get('#number6').click();
    cy.get('#number3').click();
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#number6').click();
    cy.get('#number3').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#number6').click();
    cy.get('#number3').click();
    cy.get('#number9').click();
    cy.get('#number6').click();
    cy.get('#number3').click();
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '379169163602555650')
  })

  it('can display Error if divided by 0', ()=>{
    cy.get('#number4').click();
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'Error')
  })

})



// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).