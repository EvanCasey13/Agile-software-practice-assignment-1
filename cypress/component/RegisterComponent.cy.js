import Register from './register'

describe('<Register>', () => {
  it('The component mounts', () => {
    cy.mount(<Register />)
  })

  it('Enter registration details & register account.', () => {
    cy.mount(<Register />)
    
    const accountName = "RegistrationComponentTest"
    const email = "evancasey8888@gmail.com";
    const password = "1234567";

    cy.get("#registration-name").clear().type(accountName);
    cy.get("#registration-email").clear().type(email);
    cy.get("#registration-password").clear().type(password);
  
    cy.get("#register_movie_app_button").contains("Register").click();
  })
})