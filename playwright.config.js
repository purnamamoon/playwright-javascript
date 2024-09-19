const { devices } = require('@playwright/test')

const defineConfig = {
  testDir: './tests',
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    testIdAttribute: 'data-test'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ],
};

module.exports = defineConfig