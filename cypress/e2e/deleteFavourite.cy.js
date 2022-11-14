import '../support/commands'

let movies;

describe("The remove favourite movie feature", () => {
    before(() => {
        cy.request(
          `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
          .its("body")
          .then((response) => {
            movies = response.results;
          });
      });

describe("Selecting favourite movies", () => {
    it("Favorited movies contain the red heart", () => {
      cy.visit("/");
      cy.checkRedHeartExists(1);
    });
  });

  describe("The favourites page", () => {
    it("Add movies to favourites.", () => {
      cy.addToFavourites(1);
      cy.addToFavourites(3);
      cy.clickButton("Favorites");
    });
    it("The favorited movies are listed.", () => {
      cy.checkMoviesLength(2);
      cy.checkMoviesExist(0, movies[1].title);
      cy.checkMoviesExist(1, movies[3].title);
    });
    it("Remove the favourited movies from the list.", () => {
      cy.removeFavourite(1);
      cy.removeFavourite(0);
      });
  });
});
