import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportHeight: 1000,
    viewportWidth: 1280,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
