import { test, expect } from "@playwright/test";

test.describe("Finding different elements using raw locators", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements.html");
  });

  test("Find label element by ID (CSS)", async ({ page }) => {
    const selector = "#id-label-element";

    // we can use the locator method to find the element:
    const elementLocator = page.locator(selector);

    // on locator we can use different methods like click, fill, etc
    // but we can also use expect methods to check the element:
    await expect(elementLocator).toBeVisible();
    await expect(elementLocator).toHaveText("Some text for label");
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
  test("Find element", async ({ page }) => {
    // get element by alt text:
    const locatorByAltText = page.getByAltText("Image alt text");

    // get element by label text:
    const locatorByLabelText = page.getByLabel("Some text for label");

    // get element by placeholder:
    const locatorByPlaceholder = page.getByPlaceholder("Enter your name");

    // get element by role:
    const elementLocatorByRole = page.getByRole("checkbox");

    // get element by test ID:
    const locatorByTestId = page.getByTestId("label-text");

    // get element by text:
    const locatorByText = page.getByText("Some text for label");

    // get element by title:
    const locatorByTitle = page.getByTitle("Title for label");

    // CSS selector:
    const selectorCss = "#id-label-element";
    const locatorFromCss = page.locator(selectorCss);

    // XPath selector:
    const selectorXpath = "//*[@id='id-label-element']";
    const locatorFromXpath = page.locator(selectorXpath);
  });
});
