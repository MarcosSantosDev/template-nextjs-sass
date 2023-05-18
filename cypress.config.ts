import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,
  e2e: {
    viewportHeight: 1000,
    viewportWidth: 1280,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
