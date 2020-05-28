describe("Investiere Login Page Test", () => {
  const longinPageUrl = "https://dev-v4-investorapp.investiere.ch/";
  //please type a vaild test email address before running test
  const validEmail = "";
  //please type a valid test password running test
  const validPassword = "";
  const invalidEmail = "abc@gmail.com";
  const invalidPassword = "0218";

  //Negative Login Test
  it("Login Test with an invalid Email and a Password", () => {
    cy.visit(longinPageUrl);
    cy.get("#username").type(invalidEmail);
    cy.get("#password").type(invalidPassword);
    cy.get("input[type='submit']").click();
    cy.get(".kc-feedback-text > p").contains("Invalid username or password.");
  });

  //Positive Login Test
  it("Login Test with a valid Email and Password", () => {
    cy.visit(longinPageUrl);
    //username and password need to be cleared on input fields
    cy.get("#username").click().clear().type(validEmail);
    cy.get("#password").click().clear().type(validPassword);
    cy.get("input[type='submit']").click();
    cy.url().should("include", longinPageUrl + "invest");
  });
});
