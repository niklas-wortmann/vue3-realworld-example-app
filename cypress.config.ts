import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'j7s91r',
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5173',
    defaultCommandTimeout: 8000,
  },
})
