import { test, expect } from "@playwright/test";

test.describe("Finding different elements using raw locators and XPath selectors", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements.html");
  });

  test("Find label element by ID (XPath)", async ({ page }) => {
    // we can define the selector for the element
    // in this case, we are using the XPath selector for ID:
    const selector = "//*[@id='id-label-element']";

    // we can use the locator method to find the element:
    const elementLocator = page.locator(selector);

    // on locator we can use different methods like click, fill, etc
    // but we can also use expect methods to check the element:
    await expect(elementLocator).toBeVisible();
    await expect(elementLocator).toHaveText("Some text for label");
  });

  test("Find label element by class (XPath)", async ({ page }) => {
    // we can define the selector for the element
    // in this case, we are using the XPath selector for class:
    const selector = "//*[contains(@class, 'my-label')]";

    // we can use the locator method to find the element:
    const elementLocator = page.locator(selector);

    // and the assertion:
    await expect(elementLocator).toHaveText("Some text for label");
  });

  test("Find label element by custom attribute (XPath)", async ({ page }) => {
    // we can define the selector for the element
    // in this case, we are using the XPath selector for custom attribute:
    const selector = "//*[@custom-attribute='custom-value']";

    // we can use the locator method to find the element:
    const elementLocator = page.locator(selector);

    // on locator we can use different methods like click, fill, etc
    // but we can also use expect methods to check the element:
    await expect(elementLocator).toBeVisible();
    await expect(elementLocator).toHaveText("Some text for label");
  });
});
