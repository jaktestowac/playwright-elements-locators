import { test, expect } from "@playwright/test";

test.describe("Locator lists", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-multiple-elements-no-ids.html");
  });

  test("All buttons on page", async ({ page }) => {
    // Arrange:
    const elementRole = "button";
    const expectedElementsCount = 7;

    // we can define the locator for the element
    const buttonLocator = page.getByRole(elementRole);

    // print the count of buttons on the page
    console.log("number of button elements:", await buttonLocator.count());

    // Assert:
    // check if number of buttons is 7
    await expect(buttonLocator).toHaveCount(expectedElementsCount);
  });

  // unskip to see the error during test run
  test.skip("❌ SHOULD FAIL ❌ - try clicking button (when multiple buttons are on page)", async ({
    page,
  }) => {
    // Arrange:
    const elementRole = "button";

    // we can define the locator for the element
    const buttonLocator = page.getByRole(elementRole);

    // print the count of buttons on the page
    console.log("number of button elements:", await buttonLocator.count());

    // Assert:
    // check if number of buttons is 7
    await expect(buttonLocator).toHaveCount(7);

    // ❌ because there are multiple buttons on the page
    // ❌ following line will return an error:
    await buttonLocator.click();

    // ❌ with following error on console:
    // Error: locator.click: Error: strict mode violation: getByRole('button') resolved to 7 elements:
    // 1) <button id="btnPractice" class="button-primary" data-testid="open-practice">Main Practice Page</button> aka getByTestId('open-practice')
    // 2) <button class="my-button" onclick="buttonOnClick()">Click me!</button> aka getByRole('button', { name: 'Click me!' })
    // 3) <button class="my-button" onclick="buttonOnClick('(Second one!)')">Click me too!</button> aka getByRole('button', { name: 'Click me too!' })
    // 4) <button class="my-button" onclick="buttonOnClick('(Third one!)')">Click here!</button> aka getByRole('button', { name: 'Click here!' })
    // 5) <button class="my-button" onclick="buttonOnClick('(row 1)')">Click!</button> aka getByRole('row', { name: 'Row 1 X Click!' }).getByRole('button')
    // 6) <button class="my-button" onclick="buttonOnClick('(row 2)')">Click!</button> aka getByRole('row', { name: 'Row 2 Y Click!' }).getByRole('button')
    // 7) <button class="my-button" onclick="buttonOnClick('(row 3)')">Click!</button> aka getByRole('row', { name: 'Row 3 Z Click!' }).getByRole('button')
  });

  test("action on nth button", async ({ page }) => {
    // Arrange:
    const elementRole = "button";
    const resultsTestId = "dti-results";
    const expectedMessage = "You clicked the button! (Second one!)";

    const buttonLocator = page.getByRole(elementRole);
    const resultsLocator = page.getByTestId(resultsTestId);

    // print the count of buttons on the page
    console.log("number of button elements:", await buttonLocator.count());

    // Act:
    // click on the 3rd button (we count from 0)
    await buttonLocator.nth(2).click();

    // display the text content of the results element
    // console.log("results text content:", await resultsLocator.textContent());

    // Assert:
    await expect(resultsLocator).toHaveText(expectedMessage);
  });

  test("action on multiple buttons", async ({ page }) => {
    // Arrange:
    const elementRole = "button";
    const elementText = "Click!";
    const resultsTestId = "dti-results";

    const buttonLocator = page.getByRole(elementRole, { name: elementText });
    const resultsLocator = page.getByTestId(resultsTestId);

    // print the count of buttons on the page
    console.log("number of button elements:", await buttonLocator.count());
    
    // Act:
    // await buttonLocator.nth(0).click();
    // console.log(await resultsLocator.textContent());
    // await buttonLocator.nth(1).click();
    // console.log(await resultsLocator.textContent());
    // await buttonLocator.nth(2).click();
    // console.log(await resultsLocator.textContent());

    // usage of count() method
    let numberOfFoundButtons = await buttonLocator.count();
    for (let i = 0; i < numberOfFoundButtons; i++) {
      await buttonLocator.nth(i).click();

      // display the text content of the results element
      console.log("results text content:", await resultsLocator.textContent());
    }

    // usage of all() method
    for (const button of await buttonLocator.all()) {
      await button.click();
      console.log("results text content:", await resultsLocator.textContent());
    }

    // TODO: add assertions
  });
});
