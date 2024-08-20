import { test, expect } from "@playwright/test";

test.describe("Locator lists", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-multiple-elements-no-ids.html");
  });

  test("All buttons on page", async ({ page }) => {
    // Arrange:
    // Act:
    // Assert:
  });

  test("Action on nth button", async ({ page }) => {
    // Arrange:
    // Act:
    // Assert:
  });

  test("Action on multiple buttons", async ({ page }) => {
    // Arrange:
    // Act:
    // Assert:
  });
});
