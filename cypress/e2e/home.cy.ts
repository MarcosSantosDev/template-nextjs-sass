describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should visit to the home page', () => {
    cy.checkTheHomePageInPtBrLanguage();
  });

  it('should navigate to the contact page', () => {
    cy.contains('Ir para pagina de contato').click();

    cy.url().should('include', '/contato');

    cy.checkTheContactpageInPtBrLanguage();
  });

  it('should change the language of the home page', () => {
    cy.validateLanguageSwitchToEnUS();

    cy.url().should('include', '/en');

    cy.checkTheHomepageInEnUsLanguage();

    cy.validateLanguageSwitchToPtBr();

    cy.url().should('include', '/');

    cy.checkTheHomePageInPtBrLanguage();
  });
});
