// Test every button + simple arithmetic (1 + 1 etc)

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/VanillaJS-Calculator-Team-2/index.html')
  })

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
  })
})