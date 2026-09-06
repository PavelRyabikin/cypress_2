describe("booking film", () => {
  it("booking film in available theater", () => {
    cy.fixture("login").then((login) => {
      cy.fixture("selectors").then((selectors) => {
        cy.visit("/admin/");

        cy.login(login.happy.email, login.happy.password, selectors.admin);

        cy.contains(selectors.admin.movieTitle, "Ведьмак")
          .invoke("text")
          .then((movieTitle) => {
            cy.visit("/client/index.php");

            cy.get(selectors.client.day).click();

            cy.contains(selectors.client.movieTitle, movieTitle.trim())
              .parents(selectors.client.movie)
              .contains("20:00")
              .click();

            cy.selectChair(selectors.client.chair1);
            cy.selectChair(selectors.client.chair2);
            cy.selectChair(selectors.client.chair3);
            cy.contains("Забронировать").click();
            cy.contains("Вы выбрали билеты:").should("be.visible");
          });
      });
    });
  });
});
