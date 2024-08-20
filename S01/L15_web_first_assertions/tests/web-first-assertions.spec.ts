import { test, expect } from "@playwright/test";

test.describe.only("Web-first assertions and auto-waiting", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/not-displayed-elements-1.html");
  });

  test("Button visibility (Web-first assertions)", async ({ page }) => {
    // https://playwright.dev/docs/best-practices#use-web-first-assertions
    // Arrange:
    const elementSelector = "dti-button-element";

    const buttonLocator = page.getByTestId(elementSelector);

    // print status of the button at this moment:
    console.log("is button visible?", await buttonLocator.isVisible());

    // Assert:
    // use web-first assertions:
    // this will automatically wait for the button to be visible:
    await expect(buttonLocator).toBeVisible();
  });

  test("Auto-waiting for elements for action", async ({ page }) => {
    // https://playwright.dev/docs/actionability
    // Arrange:
    const elementSelector = "dti-button-element";
    const resultsTestId = "dti-results";

    const buttonLocator = page.getByTestId(elementSelector);
    const result = page.getByTestId(resultsTestId);

    // print status of the button at this moment:
    console.log("is button visible?", await buttonLocator.isVisible());

    // Act:
    // use auto-waiting during click:
    await buttonLocator.click();

    // Assert:
    // and check the results:
    await expect(result).toHaveText("You clicked the button!");
  });
});
