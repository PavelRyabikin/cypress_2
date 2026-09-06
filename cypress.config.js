const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'md48o7',
  e2e: {
    baseUrl: "https://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
