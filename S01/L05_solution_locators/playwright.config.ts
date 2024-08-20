import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on",
    testIdAttribute: 'pw-test'
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
