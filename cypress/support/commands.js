Cypress.Commands.add('checkRedHeartExists', (index) => {
    cy.get(".MuiCardHeader-root").eq(index).find("svg").should("not.exist");
    cy.get("button[aria-label='add to favorites']").eq(index).click();
    cy.get(".MuiCardHeader-root").eq(index).find("svg");
  });

  Cypress.Commands.add('addToFavourites', (index) => {
      cy.get("button[aria-label='add to favorites']").eq(index).click();
      cy.get("button[aria-label='add to favorites']").eq(index).click();
  });

  Cypress.Commands.add('clickButton', (label) => {
    cy.get("button").contains(label).click();
});

Cypress.Commands.add('checkIfMoviesAreListed', (index, title) => {
    cy.get(".MuiCardHeader-content")
    .eq(index)
    .find("p")
    .contains(title);
});

Cypress.Commands.add('checkMoviesLength', (index) => {
    cy.get(".MuiCardHeader-content").should("have.length", index);
});

Cypress.Commands.add('clickReviewButton', (index) => {
    cy.get("svg[data-testid='RateReviewIcon'").eq(index).click();
});

Cypress.Commands.add('addReview', (name, reviewContent) => {
    cy.get("#author").clear().type(name); 
    cy.get("#review").clear().type(reviewContent); 
    cy.get("#select-rating").click();

    cy.contains('Excellent').click()

    cy.get(".MuiButtonBase-root").contains("Submit").click();

    cy.get("svg[data-testid='CloseIcon'").click();
});

