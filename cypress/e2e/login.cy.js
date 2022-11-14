import '../support/commands'

describe("Login use case", () => {

    describe("Navigate to the login page", () => {
        it("Navigates to login page", () => {    
            cy.visit("/login");
        });
      });
    
    describe("login to account", () => {
    it("Enter account details & Check if user logged in, then logout", () => {   
        cy.clickButton("Login");  
        cy.url().should("include", `/login`);
         
        const email = "evancasey2345@gmail.com";
        const password = "1234567";
        
        cy.Login(email, password);

        cy.checkIfUserIsLoggedIn(email);
        cy.clickButton("Logout");  
    });
    });
});

