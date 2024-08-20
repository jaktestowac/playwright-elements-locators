import { test, expect } from "@playwright/test";

test.describe("Finding different elements with getBy methods", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements.html");
  });

  test("Find button element by getByRole methods", async ({ page }) => {
    // https://playwright.dev/docs/locators
    // getByRole is a custom method that we can use to find elements by role attribute
    const elementLocator = page.getByRole("button", { name: "Click me" });

    await expect(elementLocator).toBeVisible();
  });

  test("Find button element by getByText and getByTestId methods", async ({
    page,
  }) => {
    const expectedMessage = "You clicked the button!";
    const resultsDataTestId = "dti-results";

    // getByText is a custom method that we can use to find elements by text content
    const elementLocator = page.getByText("Click me");

    await expect(elementLocator).toBeVisible();

    // We can use the element directly
    await elementLocator.click();

    // then we can get the element with expect result text:
    const resultsElementLocator = page.getByTestId(resultsDataTestId);

    // and we can check the text of the element
    await expect(resultsElementLocator).toHaveText(expectedMessage);
  });

  test("Find label element by getByTestId methods", async ({ page }) => {
    // We can use getByTestId method to find elements by data-testid attribute
    // First we need to define the selector:
    const selector = "dti-label-element";

    // getByTestId is a custom method that we can use to find elements by data-testid attribute
    // by default attribute is data-testid, but we can change it
    const elementLocator = page.getByTestId(selector);

    await expect(elementLocator).toHaveText("Some text for label");
  });
});
