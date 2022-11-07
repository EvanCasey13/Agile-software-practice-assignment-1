describe("Login use case", () => {

    describe("Navigate to the login page", () => {
        it("Navigates to login page", () => {    
            cy.visit("/login");
        });
      });
    
    describe("login to account", () => {
    it("Enter account details & Check if user logged in, then logout", () => {   
        cy.get("button").contains("Login").click();  
        cy.url().should("include", `/login`);
         
        const email = "evancasey2345@gmail.com";
        const password = "1234567";
        
        cy.get("#login-email").clear().type(email); 
        cy.get("#login-password").clear().type(password); 

        cy.get("#login_button").contains("Login").click();

        cy.get("#user_display_email").contains(email);
        cy.get("button").contains("Logout").click();  
    });
    });
});

