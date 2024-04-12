describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:3000/sobre");
    cy.get('input[name="nome"]').type("Chinês");
    cy.get('input[name="telefone"]').type("44 99808000");
    cy.get('input[name="email"]').type("china@gmail.com");
    cy.get('select[name="cidade"]').select("Perobal");
    cy.get('textarea[name="mensagem"]').type("Melhor E-commerce.");
    cy.get('button[type="submit"]').click();
  });
});
