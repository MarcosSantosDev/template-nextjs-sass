describe('Contact page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contato');
  });

  it('should visit to the contact page', () => {
    cy.checkTheContactpageInPtBrLanguage();
  });

  it('should navigate to the home page', () => {
    cy.contains('Ir para pagina inicial').click();

    cy.url().should('include', '/');

    cy.checkTheHomePageInPtBrLanguage();
  });

  it('should change the language of the contact page', () => {
    cy.validateLanguageSwitchToEnUS();

    cy.url().should('include', '/en/contato');

    cy.checkTheContactpageInEnUsLanguage();

    cy.validateLanguageSwitchToPtBr();

    cy.url().should('include', '/contato');

    cy.checkTheContactpageInPtBrLanguage();
  });
});
