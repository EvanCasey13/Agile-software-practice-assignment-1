import '../support/commands'

describe("Registration use case", () => {

    describe("Navigate to the registration page", () => {
        it("Navigates to registration page", () => {    
            cy.visit("/register");
        });
      });
    
    describe("Register account", () => {
    it("Enter account details & Register then Check if user logged in, then logout", () => {   
        cy.clickButton("Register");  
        cy.url().should("include", `/register`);
         
        const accountName = "Evan1234";
        const email = "evancasey1234@gmail.com";
        const password = "1234567";
        
        cy.get("#registration-name").clear().type(accountName);   
        cy.get("#registration-email").clear().type(email); 
        cy.get("#registration-password").clear().type(password); 

        cy.get("#register_movie_app_button").contains("Register").click();

        cy.get("#user_display_email").contains(email);
        cy.clickButton("Logout");  
    });
    });
});

