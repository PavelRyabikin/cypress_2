describe("main page", () => {
  it("should show correct main page", () => {
    cy.visit("/client/index.php");
    cy.contains("Идёмвкино").should("be.visible");
  });
});
