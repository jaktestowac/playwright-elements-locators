import { test, expect } from "@playwright/test";

test.describe("Finding different elements using raw locators and CSS selectors", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements.html");
  });

  test("Find label element by ID (CSS)", async ({ page }) => {
    // we can define the selector for the element
    // in this case, we are using the id selector:
    const selector = "#id-label-element";

    // we can use the locator method to find the element:
    const elementLocator = page.locator(selector);

    // on locator we can use different methods like click, fill, etc
    // but we can also use expect methods to check the element:
    await expect(elementLocator).toBeVisible();
    await expect(elementLocator).toHaveText("Some text for label");
  });

  test("Find label element by class (CSS)", async ({ page }) => {
    // we can define the selector for the element
    // in this case, we are using the class selector:
    const selector = ".my-label";

    // we can use the locator method to find the element:
    const elementLocator = page.locator(selector);

    // and the assertion:
    await expect(elementLocator).toHaveText("Some text for label");
  });

  test("Find label element by custom attribute (CSS)", async ({ page }) => {
    // we can define the selector for the element
    // in this case, we are using custom attribute selector:
    const selector = "[custom-attribute='custom-value']";

    // we can use the locator method to find the element:
    const elementLocator = page.locator(selector);

    // on locator we can use different methods like click, fill, etc
    // but we can also use expect methods to check the element:
    await expect(elementLocator).toBeVisible();
    await expect(elementLocator).toHaveText("Some text for label");
  });
});