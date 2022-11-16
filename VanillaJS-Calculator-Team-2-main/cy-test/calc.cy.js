describe('empty spec', () => {
  it('Loads page', () => {
    cy.visit('http://127.0.0.1:5500')
  })

// -GRAEME- //

it('test every button', () =>{
  cy.get('input[value="0"]').should('have.value', 0);
  cy.get('input[value="1"]').should('have.value', 1);
  cy.get('input[value="2"]').should('have.value', 2);
  cy.get('input[value="3"]').should('have.value', 3);
  cy.get('input[value="4"]').should('have.value', 4);
  cy.get('input[value="5"]').should('have.value', 5);
  cy.get('input[value="6"]').should('have.value', 6);
  cy.get('input[value="7"]').should('have.value', 7);
  cy.get('input[value="8"]').should('have.value', 8);
  cy.get('input[value="9"]').should('have.value', 9);
  cy.get('input[value="("]').should('have.value', '(');
  cy.get('input[value=")"]').should('have.value', ')');
  cy.get('input[value="+"]').should('have.value', '+');
  cy.get('input[value="-"]').should('have.value', '-');
  cy.get('input[value="*"]').should('have.value', '*');
  cy.get('input[value="/"]').should('have.value', '/');
  cy.get('input[value="="]').should('have.value', '=');
})

it('performs simple arithmetic', () =>{
  
  // example equation:  5+7-4*5/10 = 1
  cy.get('input[value="5"]').click();
  cy.get('input[value="+"]').click();
  cy.get('input[value="7"]').click();
  cy.get('input[value="C"]').click(); // test that this button works as intended
  cy.get('input[value="5"]').click();
  cy.get('input[value="-"]').click();
  cy.get('input[value="4"]').click();
  cy.get('input[value="*"]').click();
  cy.get('input[value="5"]').click();
  cy.get('input[value="AC"]').click(); // test that this button works as intended
  cy.get('input[value="3"]').click();
  cy.get('input[value="0"]').click();
  cy.get('input[value="/"]').click();
  cy.get('input[value="3"]').click();
  cy.get('input[value="="]').click();
  cy.get('#sum').should('have.value', 10);
  cy.get('input[value="AC"]').click();
})

// -JAMIE- //

it('Order of Operations Check', () => {
  // Checks equation is calculated through correct Order of Operations, aka (BODMAS ---> Brackets, Order, Division, Multiplication, Addition, Subtraction)

  // Example equation: 7+5*(1-4)/6 = 4.5
  // If the calculator value equals 4.5, the order of operations applies correctly
  
  // Inputs "(3-2*6/3+(8/4))*5"
  cy.get("[data-cy=seven]").click();
  cy.get("[data-cy=plus]").click();
  cy.get("[data-cy=five]").click();
  cy.get("[data-cy=multiply]").click();
  cy.get("[data-cy=open-bracket]").click();
  cy.get("[data-cy=one]").click();
  cy.get("[data-cy=minus]").click();
  cy.get("[data-cy=four]").click();
  cy.get("[data-cy=close-bracket]").click();
  cy.get("[data-cy=divide]").click();
  cy.get("[data-cy=six]").click();
  cy.get("[data-cy=equals]").click();

  // Checks if value is correct
  cy.get("[data-cy=sum]").should("have.value","4.5");
  cy.get("[data-cy=all-clear]").click();


  // Example equation: (3-2*6/3+(8/4))*5 = 5
  // If the calculator value equals 5, the order of operations applies correctly

  // Inputs "(3-2*6/3+(8/4))*5"
  cy.get("[data-cy=open-bracket]").click();
  cy.get("[data-cy=three]").click();
  cy.get("[data-cy=minus]").click();
  cy.get("[data-cy=two]").click();
  cy.get("[data-cy=multiply]").click();
  cy.get("[data-cy=six]").click();
  cy.get("[data-cy=divide]").click();
  cy.get("[data-cy=three]").click();
  cy.get("[data-cy=plus]").click();
  cy.get("[data-cy=open-bracket]").click();
  cy.get("[data-cy=eight]").click();
  cy.get("[data-cy=divide]").click();
  cy.get("[data-cy=four]").click();
  cy.get("[data-cy=close-bracket]").click();
  cy.get("[data-cy=close-bracket]").click();
  cy.get("[data-cy=multiply]").click();
  cy.get("[data-cy=five]").click();
  cy.get("[data-cy=equals]").click();

  // Checks if value is correct
  cy.get("[data-cy=sum]").should("have.value","5");
  cy.get("[data-cy=all-clear]").click();
})

// ------------------------------------- //

it('Functioning Error Check', () => {
  // Checks error check is functioning
  // If an illegal sequence of characters are entered, the page resets and calculator value should be null

  // Inputs "(+)"
  cy.get("[data-cy=open-bracket]").click();
  cy.get("[data-cy=plus]").click();
  cy.get("[data-cy=close-bracket]").click();
  cy.get("[data-cy=equals]").click();

  // Checks if there is no value
  cy.get("[data-cy=sum]").should("not.have.value");

  // Inputs "+-)(."
  cy.get("[data-cy=plus]").click();
  cy.get("[data-cy=minus]").click();
  cy.get("[data-cy=close-bracket]").click();
  cy.get("[data-cy=open-bracket]").click();
  cy.get("[data-cy=decimal]").click();
  cy.get("[data-cy=equals]").click();

  // Checks if there is no value
  cy.get("[data-cy=sum]").should("not.have.value");
})

// -HARVEY- //

// Test decimal arithmetic (1.5 * 2, 3 /2)
it ('handles decimal arithmetic', () => {

  // Input sum 1.5 * 2
  cy.get('input[value="1"]').click()
  cy.get('input[value="."]').click()
  cy.get('input[value="5"]').click()
  cy.get('input[value="*"]').click()
  cy.get('input[value="2"]').click()
  cy.get('#equals').click()

  // Expect value of sum field (result) to equal 3
  cy.get('#sum').should(($result) => {
    const result = $result.val();
    expect(result).to.equal("3");
  })
  // Divide result (3) by 2 using same method
  cy.get('input[value="/"]').click()
  cy.get('input[value="2"]').click()
  cy.get('#equals').click()

  // Expect result to equal 3
  cy.get('#sum').should(($result) => {
    const result = $result.val();
    expect(result).to.equal("1.5");
  })
})

it('clears results', () => {
  cy.get("#clear-all").click();
})

// Test negative number arithmetic (3 - 6, -3 + 3)
it('handles negative number arithmetic', () => {
  
  // Inputs sum 3 - 6
  cy.get('input[value="3"]').click()
  cy.get('input[value="-"]').click()
  cy.get('input[value="6"]').click()
  cy.get('#equals').click()

  // Expects result to be -3
  cy.get('#sum').should(($result) => {
    const result = $result.val();
    expect(result).to.equal("-3");
  })

  // Adds 3 to result (-3)
  cy.get('input[value="+"]').click()
  cy.get('input[value="3"]').click()
  cy.get('#equals').click()

  // Expects result to equal 0
  cy.get('#sum').should(($result) => {
    const result = $result.val();
    expect(result).to.equal("0");
  })
})

})