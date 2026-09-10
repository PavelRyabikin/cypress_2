describe("admin page", () => {
  it("should show authorization form", () => {
    cy.visit("/admin/");
    cy.get(".login__title").should("be.visible");
  });
});
