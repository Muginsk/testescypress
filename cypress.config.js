const { defineConfig } = require("cypress");
const createBundler = require("@badeball/cypress-cucumber-preprocessor/webpack").createBundler;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const webpack = require("@cypress/webpack-preprocessor");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",

  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    mochaJunitReporterReporterOptions: {
      mochafile: "cypress/reports/junit/results-[hash].xml",
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: "Relatório de Testes",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },

  chromeWebSecurity: false,

  e2e: {
    async setupNodeEvents(on, config) {
      // Ativar o Mochawesome Reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      // Adicionar suporte ao Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Corrigir erro do file:preprocessor com Webpack
      on(
        "file:preprocessor",
        createBundler({
          plugins: [webpack()],
        })
      );

      return config;
    },

    specPattern: "cypress/e2e/**/*.feature", // Arquivos .feature do Cucumber
    baseUrl: "http://localhost:3000",
  },
});
