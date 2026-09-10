describe("admin login", () => {
  it("should login to admin", () => {
    cy.fixture("login").then((data) => {
      cy.fixture("selectors").then((selectors) => {
        cy.visit("/admin/");

        cy.login(data.happy.email, data.happy.password, selectors.admin);
        cy.contains("Управление залами").should("be.visible");

        cy.clearCookies();

        cy.visit("/admin/");

        cy.login(data.sad.email, data.sad.password, selectors.admin);
        cy.contains("Ошибка авторизации!").should("be.visible");
      });
    });
  });
});
