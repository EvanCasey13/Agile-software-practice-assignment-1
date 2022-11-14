import '../support/commands'

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
      cy.visit("/movies/search");
    });
  });

  describe("Enter Blade runner and search for movies.", () => {
    it("Blade runner searched for.", () => {
        cy.search('Blade Runner');   
    });
  });

  describe("Add both blade runner films to favourites.", () => {
    it("Favourite both Blade runner films.", () => {
        cy.addToFavourites(1);
        cy.addToFavourites(0);
        cy.clickButton("Favorites");  
    });

    it("Only the tagged movies are listed.", () => {
        cy.checkMoviesLength(2);
        cy.checkMoviesExist(0, movies[1].title);
        cy.checkMoviesExist(1, movies[0].title);
      });
  });

  describe("Check details for each movie appears.", () => {
    it("Enter the details page of Blade Runner 2049.", () => {
        cy.getDetails(1, movies[0].id);
    });
  });

  describe("Check reviews for Blade Runner 2049.", () => {
    it("Click reviews floating action button & check reviews.", () => {
    cy.checkReview()
    });
  });
});
