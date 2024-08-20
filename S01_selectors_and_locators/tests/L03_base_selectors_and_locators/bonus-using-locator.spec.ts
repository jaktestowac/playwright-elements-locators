import { test, expect } from "@playwright/test";

test.describe("Finding different elements using XPath and CSS", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements.html");
  });

  test("Find elements XPath and CSS", async ({ page }) => {
    // we can define the selector for the element
    const elementLocatorCss = page.locator("textarea");

    // or we can use prefix css= to define the selector
    const elementLocatorCssWithPrefix = page.locator("css=textarea");

    // Playwright supports XPath selectors and auto detects if the selector is XPath
    const elementLocatorXpath = page.locator("//textarea");
    // or we can use prefix xpath= to define the selector
    const elementLocatorXpathWithPrefix = page.locator("xpath=//textarea");

    // and now lets check if button element found using different selectors is visible:
    await expect(elementLocatorCss).toBeVisible();
    await expect(elementLocatorCssWithPrefix).toBeVisible();
    await expect(elementLocatorXpath).toBeVisible();
    await expect(elementLocatorXpathWithPrefix).toBeVisible();
  });
});
