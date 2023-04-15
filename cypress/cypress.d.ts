/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    checkTheHomePageInPtBrLanguage(): Chainable<void>;
    checkTheHomepageInEnUsLanguage(): Chainable<void>;
    checkTheContactpageInPtBrLanguage(): Chainable<void>;
    checkTheContactpageInEnUsLanguage(): Chainable<void>;
    validateLanguageSwitchToPtBr(): Chainable<void>;
    validateLanguageSwitchToEnUS(): Chainable<void>;
  }
}
