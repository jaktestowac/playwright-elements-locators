import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on",
    testIdAttribute: "pw-test", // define the testIdAttribute used in page.getByTestId()
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
