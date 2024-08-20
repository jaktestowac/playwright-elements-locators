import { test, expect } from "@playwright/test";

test.describe("Locator filters and nested table", () => {
  // https://playwright.dev/docs/locators#locator-operators

  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-nested-table-v1.html");
  });

  test("Click selected button using getByRole", async ({ page }) => {
    // we expect to get the following output on console:
    // You clicked the button! (row 2-1-2)
    // Arrange:
    // Act:
    // Assert:
  });

  test("Click Z buttons using filter", async ({ page }) => {
    // we expect to get the following output on console:
    // You clicked the button! (row 1-3)
    // You clicked the button! (row 2-3)
    // You clicked the button! (row 3-3)
    // Arrange:
    // Act:
    // Assert:
  });
});
