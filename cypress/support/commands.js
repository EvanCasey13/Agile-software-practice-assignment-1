Cypress.Commands.add('clickButton', (label) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get('button').contains(label).click()
});

Cypress.Commands.add('addToFavourites', (index) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get("button[aria-label='add to favorites']").eq(index).click();
});

Cypress.Commands.add('search', (query) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get("#filled-search").clear().type(query);
});

Cypress.Commands.add('checkMoviesExist', (index, title) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get(".MuiCardHeader-content")
    .eq(index)
    .find("p")
    .contains(title);
});

Cypress.Commands.add('checkMoviesLength', (number) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get(".MuiCardHeader-content").should("have.length", number);
});

Cypress.Commands.add('getDetails', (index, id) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get(".MuiCardActions-root").eq(index).contains("More Info").click();
  cy.url().should("include", `/movies/${id}`);
});

Cypress.Commands.add('checkReview', () => {
  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  Cypress.on('fail', (error, runnable) => {

    if (!error.message.includes("Reviews")) {

      throw error

    }

  })


  cy.get(".MuiFab-root").contains("Reviews").click();
  cy.get(".MuiTableCell-body").contains("Full Review").click();
  cy.url().should("include", `/reviews/`);
});

Cypress.Commands.add('checkRedHeartExists', (index) => {

  Cypress.on('fail', (error, runnable) => {

    if (!error.message.includes("button[aria-label='add to favorites']")) {

      throw error

    }

  })

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }
    return true

  })

  cy.get(".MuiCardHeader-root").eq(index).find("svg").should("not.exist");
  cy.get("button[aria-label='add to favorites']").eq(index).click();
  cy.get(".MuiCardHeader-root").eq(index).find("svg");
});

Cypress.Commands.add('clickReviewButton', (index) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  Cypress.on('fail', (error, runnable) => {

    if (!error.message.includes("svg[data-testid='RateReviewIcon'")) {

      throw error

    }

  })
  cy.get("svg[data-testid='RateReviewIcon'").eq(index).click();
});

Cypress.Commands.add('addReview', (name, reviewContent) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get("#author").clear().type(name);
  cy.get("#review").clear().type(reviewContent);
  cy.get("#select-rating").click();

  cy.contains('Excellent').click()

  cy.get(".MuiButtonBase-root").contains("Submit").click();

  cy.get("svg[data-testid='CloseIcon'").click();
});

Cypress.Commands.add('removeFavourite', (index) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get("button[aria-label='remove from favorites']").eq(index).click();
});

Cypress.Commands.add('Login', (email, password) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get("#login-email").clear().type(email);
  cy.get("#login-password").clear().type(password);
  cy.get("#login_button").contains("Login").click();
});

Cypress.Commands.add('checkIfUserIsLoggedIn', (email) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }
    return true

  })

  cy.get("#user_display_email").contains(email);
});

Cypress.Commands.add('Register', (accountName, email, password) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get("#registration-name").clear().type(accountName);
  cy.get("#registration-email").clear().type(email);
  cy.get("#registration-password").clear().type(password);

  cy.get("#register_movie_app_button").contains("Register").click();
});

Cypress.Commands.add('getActorDetails', (index, id) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get(".MuiCardActions-root").eq(index).contains("More Info").click();
  cy.url().should("include", `/actors/${id}`);
});

Cypress.Commands.add('getShowDetails', (index, id) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get(".MuiCardActions-root").eq(index).contains("More Info").click();
  cy.url().should("include", `/shows/${id}`);
});

Cypress.Commands.add('pagination', (index) => {

  cy.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Unexpected token')) {

      console.log('Application Error Javascript Token')

      return false;

    }

    if (err.name === 'TypeError') {

      console.log('Type Error')

      return false
    }

    return true

  })

  cy.get(".MuiPaginationItem-root").eq(index).contains(2).click();
});
