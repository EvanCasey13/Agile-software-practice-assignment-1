import Login from './login'

describe('<Login>', () => {
  it('The component mounts', () => {
    cy.mount(<Login />)
  })

  it('Enter login details.', () => {
    cy.mount(<Login />)
    
    const email = "evancasey2345@gmail.com";
    const password = "1234567";

    cy.get("#login-email").clear().type(email);
    cy.get("#login-password").clear().type(password);
    cy.get("#login_button").contains("Login").click();
  })
})