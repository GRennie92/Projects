describe('home', () => {
    it('open the test url', () => {
      // open the URL
      cy.visit('https://example.cypress.io/commands/actions');
      // get the header and check if it contains the text "Hello Cypress"
  //    cy.get("h1").contains("Hello Cypress");
      // get the header and check if it exists and check if it contains the text "Hello Cypress"
  //    .cy.get("h1").should("exist").contain("Hello Cypress");
        // get the header and check if it exists and the innerText should be equal to "Hello Cypress"
        cy.get('.action-email')
        .type('fake@email.com')
        .should('exist')
        .should("have.value", 'fake@email.com');
    });
  });