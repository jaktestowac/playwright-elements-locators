import { test, expect } from "@playwright/test";

test.describe("Finding different elements using raw locators", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements.html");
  });

  test("Find label element by ID (CSS)", async ({ page }) => {
    // TODO:
  });

  test("Find label element by ID (XPath)", async ({ page }) => {
    // TODO:
  });
});
