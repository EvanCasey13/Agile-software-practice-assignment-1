import '../support/commands'

let shows;
let slug = 'House of the dragon'

describe("The search show feature.", () => {
    before(() => {
        cy.request(
          `https://api.themoviedb.org/3/search/tv?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1&query=${slug}`
        )
          .its("body")
          .then((response) => {
            shows = response.results;
          });
      });
    

describe("Navigate to search show page.", () => {
    it("Navigated to search shows page.", () => {
      cy.visit("/shows/search");
    });
  });

  describe("Enter House of the dragon and search for that TV Show.", () => {
    it("House of the dragon searched for.", () => {
        cy.search('House of the dragon');   
    });
  });

  describe("Check details for House of the dragon.", () => {
    it("Enter the details page of House of the dragon.", () => {
        cy.getShowDetails(0, shows[0].id);
    });
  });
});