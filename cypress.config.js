const { defineConfig } = require("cypress")
const { gerarDadosAleatorios } = require('./cypress/support/gerar-dados.js')

module.exports = defineConfig({
  e2e: {
    video: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://demoqa.com/webtables",

    async setupNodeEvents(on, config) {
      gerarDadosAleatorios()
      const cucumber = require("cypress-cucumber-preprocessor").default
      on("file:preprocessor", cucumber())
      // Implemente outros node event listeners aqui
    },
  },
})