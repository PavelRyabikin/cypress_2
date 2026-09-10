describe("main page", () => {
  it("should show The Witcher movie", () => {
    cy.visit("/client/index.php");
    cy.contains("Ведьмак").should("be.visible");
  });
});
