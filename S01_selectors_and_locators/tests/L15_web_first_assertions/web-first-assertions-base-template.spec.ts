import { test, expect } from "@playwright/test";

test.describe.only("Web-first assertions and auto-waiting", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/not-displayed-elements-1.html");
  });

  test("Button visibility (Web-first assertions)", async ({ page }) => {
    // Arrange:
    // Act:
    // Assert:
  });

  test("Auto-waiting for elements for action", async ({ page }) => {
    // Arrange:
    // Act:
    // Assert:
  });
});
