import { test, expect } from "@playwright/test";

test.describe("Locator filters", () => {
  // https://playwright.dev/docs/locators#locator-operators

  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-multiple-elements-no-ids.html");
  });

  test.describe("Finding element - different approaches", () => {
    test("Single button click using options", async ({ page }) => {
      // Arrange:
      const elementRole = "button";
      const elementText = "Click me!";
      const expectedMessage = "You clicked the button!";
      const resultsTestId = "dti-results";

      // we can define the locators for the element
      const buttonLocator = page.getByRole(elementRole, { name: elementText });

      const resultsLocator = page.getByTestId(resultsTestId);

      // print the count of buttons on the page
      console.log("buttonLocator", await buttonLocator.count());

      // Act:
      await buttonLocator.click();

      // Assert:
      await expect(resultsLocator).toHaveText(expectedMessage);
    });

    test("Single button click (using filter and hasText)", async ({ page }) => {
      // Arrange:
      const elementRole = "button";
      const elementText = "Click me!";
      const expectedMessage = "You clicked the button!";
      const resultsTestId = "dti-results";

      const buttonLocator = page
        .getByRole(elementRole)
        .filter({ hasText: elementText });

      const resultsLocator = page.getByTestId(resultsTestId);
      // print the count of buttons on the page
      console.log("buttonLocator", await buttonLocator.count());

      // Act:
      await buttonLocator.click();

      // Assert:
      await expect(resultsLocator).toHaveText(expectedMessage);
    });

  });

  test.describe("Buttons in table - different approaches", () => {
    test("Single button click (chained getBy)", async ({ page }) => {
      // Arrange:
      const elementRole = "button";
      const parentRole = "row";
      const parentText = "Row 2!";
      const expectedMessage = "You clicked the button! (row 2)";
      const resultsTestId = "dti-results";

      const resultsLocator = page.getByTestId(resultsTestId);
      const buttonLocator = page
        .getByRole(parentRole, { name: parentText })
        .getByRole(elementRole);

      // Act:
      await buttonLocator.click();

      // Assert:
      await expect(resultsLocator).toHaveText(expectedMessage);
    });

    test("Single button click (using filter and has)", async ({ page }) => {
      // Arrange:
      const elementRole = "button";
      const parentRole = "row";
      const siblingText = "Row 2";
      const expectedMessage = "You clicked the button! (row 2)";
      const resultsTestId = "dti-results";

      const buttonLocator = page
        .getByRole(parentRole)
        .filter({ has: page.getByText(siblingText) })
        .getByRole(elementRole);

      const resultsLocator = page.getByTestId(resultsTestId);
      // print the count of buttons on the page
      console.log("buttonLocator", await buttonLocator.count());

      // Act:
      await buttonLocator.click();

      // Assert:
      await expect(resultsLocator).toHaveText(expectedMessage);
    });

    test("Single button click (using filter and hasText)", async ({ page }) => {
      // Arrange:
      const elementRole = "button";
      const elementText = "Click here!";
      const expectedMessage = "You clicked the button! (Third one!)";
      const resultsTestId = "dti-results";

      const resultsLocator = page.getByTestId(resultsTestId);
      const buttonLocator = page.getByRole(elementRole).filter({
        hasText: elementText,
      });

      // Act:
      await buttonLocator.click();

      // Assert:
      await expect(resultsLocator).toHaveText(expectedMessage);
    });

    test("Single button click (using filter by child)", async ({ page }) => {
      // Arrange:

      const elementRole = "button";
      const elementText = "Click!";
      const parentRole = "row";
      const siblingValue = "Y";
      const expectedMessage = "You clicked the button! (row 2)";
      const resultsTestId = "dti-results";

      const resultsLocator = page.getByTestId(resultsTestId);
      const buttonLocator = page
        .getByRole(parentRole)
        .filter({
          has: page.getByText(siblingValue, { exact: true }),
        })
        .getByRole(elementRole, { name: elementText });

      // Act:
      await buttonLocator.click();

      // Assert:
      await expect(resultsLocator).toHaveText(expectedMessage);
    });
  });
});
