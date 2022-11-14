Cypress.Commands.add('clickButton', (label) => {
    cy.get('button').contains(label).click()
  });

  Cypress.Commands.add('Login', (email, password) => {
    cy.get("#login-email").clear().type(email); 
    cy.get("#login-password").clear().type(password); 
    cy.get("#login_button").contains("Login").click();
  });

  Cypress.Commands.add('checkIfUserIsLoggedIn', (email) => {
    cy.get("#user_display_email").contains(email);
  });