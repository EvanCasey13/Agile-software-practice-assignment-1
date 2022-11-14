import '../support/commands'

let actors;
let slug = 'Cillian murphy'

describe("The search actor feature.", () => {
    before(() => {
        cy.request(
          `https://api.themoviedb.org/3/search/person?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1&query=${slug}`
        )
          .its("body")
          .then((response) => {
            actors = response.results;
          });
      });
    

describe("Navigate to search actor page.", () => {
    it("Navigated to search actors page.", () => {
      cy.visit("/actors/search");
    });
  });

  describe("Enter Cliian Murphy and search for that actor.", () => {
    it("Cillian Murphy searched for.", () => {
        cy.search('Cillian Murphy');   
    });
  });

  describe("Check details for Cillian Murphy.", () => {
    it("Enter the details page of Cillian Murphy.", () => {
        cy.getActorDetails(0, actors[0].id);
    });
  });
});