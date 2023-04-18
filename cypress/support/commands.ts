Cypress.Commands.add('checkTheHomePageInPtBrLanguage', () => {
  cy.title().should('eq', 'Pagina inicial');
  cy.get('h1').contains('Bem-vindo ao Playground Nextjs');
  cy.get('h2').contains('Pagina inicial');
  cy.contains('Ir para pagina de contato').should('be.visible');
});

Cypress.Commands.add('checkTheHomepageInEnUsLanguage', () => {
  cy.get('h1').contains('Welcome to Playground Nextjs');
  cy.get('h2').contains('Home page');
  cy.contains('Go to contact page').should('be.visible');
});

Cypress.Commands.add('checkTheContactpageInPtBrLanguage', () => {
  cy.title().should('eq', 'Pagina de contato');
  cy.get('h1').contains('Bem-vindo ao Playground Nextjs');
  cy.get('h2').contains('Pagina de contato');
  cy.contains('Ir para pagina inicial').should('be.visible');
});

Cypress.Commands.add('checkTheContactpageInEnUsLanguage', () => {
  cy.title().should('eq', 'Contact page');
  cy.get('h1').contains('Welcome to Playground Nextjs');
  cy.get('h2').contains('Contact page');
  cy.contains('Go to home page').should('be.visible');
});

Cypress.Commands.add('validateLanguageSwitchToPtBr', () => {
  cy.get('header').within(() => {
    cy.get('#change-language')
      .find('button[type="button"]')
      .as('changeLanguageButtons');

    cy.get('@changeLanguageButtons').should('have.length', 2);

    cy.contains('PT').click();

    cy.should('have.attr', 'data-selected', 'true');

    cy.get('@changeLanguageButtons')
      .contains('EN')
      .should('have.attr', 'data-selected', 'false');
  });
});

Cypress.Commands.add('validateLanguageSwitchToEnUS', () => {
  cy.get('header').within(() => {
    cy.get('#change-language')
      .find('button[type="button"]')
      .as('changeLanguageButtons');

    cy.get('@changeLanguageButtons').should('have.length', 2);

    cy.contains('EN').click();

    cy.should('have.attr', 'data-selected', 'true');

    cy.get('@changeLanguageButtons')
      .contains('PT')
      .should('have.attr', 'data-selected', 'false');
  });
});
