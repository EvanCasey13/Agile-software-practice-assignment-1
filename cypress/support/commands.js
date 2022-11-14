Cypress.Commands.add('clickButton', (label) => {
    cy.get('button').contains(label).click()
  });

  Cypress.Commands.add('Register', (accountName, email, password) => {
    cy.get("#registration-name").clear().type(accountName);   
    cy.get("#registration-email").clear().type(email); 
    cy.get("#registration-password").clear().type(password); 

    cy.get("#register_movie_app_button").contains("Register").click();
  });