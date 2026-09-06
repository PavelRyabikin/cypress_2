describe("admin login", () => {
  it("should login to admin", () => {
    cy.fixture("login").then((data) => {
      cy.visit("/admin/");

      cy.login(data.happy.email, data.happy.password);
      cy.contains("Управление залами").should("be.visible");

      cy.clearCookies();

      cy.visit("/admin/");

      cy.login(data.sad.email, data.sad.password);
      cy.contains("Ошибка авторизации!").should("be.visible");
    });
  });
});
