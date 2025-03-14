const { defineConfig } = require("cypress");

module.exports = defineConfig ({
reporter:'cypress-multi-reporters',

reporterOptions: {
  reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
  mochaJunitReporterReporterOptions: {
    mochafile: 'cypress/reports/junit/results-[hash].xml'
  },
  cypressMochawesomeReporterReporterOptions: {
    charts: true,
    reportPageTitle: 'relatorio de testes',
    embeddedScreenshots: true,
    inLineAssets: true,
    saveAllAttempts: false

  }
},

chromeWebSecurity: false,
e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },

  },
});