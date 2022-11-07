let movies;
let slug = 'Blade runner'

describe("The search movie feature.", () => {
    before(() => {
        cy.request(
          `https://api.themoviedb.org/3/search/movie?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1&query=${slug}`
        )
          .its("body")
          .then((response) => {
            movies = response.results;
          });
      });
    

describe("Navigate to search movie page.", () => {
    it("Navigated to search movies page.", () => {
      cy.visit("/search");
    });
  });

  describe("Enter Blade runner and search for movies.", () => {
    it("Blade runner searched for.", () => {
        cy.get("#filled-search").clear().type('Blade Runner{enter}');   
    });
  });

  describe("Add both blade runner films to favourites.", () => {
    it("Favourite both Blade runner films.", () => {
        cy.get("button[aria-label='add to favorites']").eq(1).click();
        cy.get("button[aria-label='add to favorites']").eq(0).click();
        cy.get("button").contains("Favorites").click();  
    });

    it("Only the tagged movies are listed.", () => {
        cy.get(".MuiCardHeader-content").should("have.length", 2);
        cy.get(".MuiCardHeader-content")
          .eq(0)
          .find("p")
          .contains(movies[1].title);
        cy.get(".MuiCardHeader-content")
          .eq(1)
          .find("p")
          .contains(movies[0].title);
      });
  });

  describe("Check details for each movie appears.", () => {
    it("Enter the details page of Blade Runner 2049.", () => {
        cy.get(".MuiCardActions-root").eq(1).contains("More Info").click();
        cy.url().should("include", `/movies/${movies[0].id}`);
    });
  });

  describe("Check reviews for Blade Runner 2049.", () => {
    it("Click reviews floating action button & check reviews.", () => {
        cy.get(".MuiFab-root").contains("Reviews").click();
        cy.get(".MuiTableCell-body").contains("Full Review").click();
        cy.url().should("include", `/reviews/`);
    });
  });
});
