import { test, expect } from "@playwright/test";

test.describe("Multiple checkboxes", () => {
  test.beforeEach(async ({ page }) => {
    // TODO: open the page
  });

  test.afterEach(async ({ page }) => {
    // TODO: open the page
  });

  test("action on multiple checkboxes", async ({ page }) => {
    // Arrange:
    // Act:
    // Assert:
  });
});

test.describe("Multiple checkboxes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-multiple-elements-no-ids.html");
  });

  test("action on multiple checkboxes", async ({ page }) => {
    // Arrange:
    const elementRole = "checkbox";
    const resultsTestId = "dti-results";
    const expectedNumberOfElements = 5;

    const checkboxLocator = page.getByRole(elementRole);
    const resultsLocator = page.getByTestId(resultsTestId);

    // Assert:
    await expect(checkboxLocator).toHaveCount(expectedNumberOfElements);

    let numberOfFoundCheckboxes = await checkboxLocator.count();
    for (let i = 0; i < numberOfFoundCheckboxes; i++) {
      // Act:
      await checkboxLocator.nth(i).check();

      // display the text content of the results element
      console.log("results text content:", await resultsLocator.textContent());
    }
  });

  test("action on multiple checkboxes (advanced, with assertion)", async ({
    page,
  }) => {
    // Arrange:
    const elementRole = "checkbox";
    const resultsTestId = "dti-results";
    const expectedMessages = {
      0: "Checkbox is checked! (Opt 1!)",
      1: "Checkbox is checked! (Opt 2!)",
      2: "Checkbox is checked! (Opt 3!)",
      3: "Checkbox is checked! (Opt 4!)",
      4: "Checkbox is checked! (Opt 5!)",
    };
    const expectedNumberOfElements = 5;

    const checkboxLocator = page.getByRole(elementRole);
    const resultsLocator = page.getByTestId(resultsTestId);

    // Assert:
    await expect(checkboxLocator).toHaveCount(expectedNumberOfElements);

    // Act & Assert:
    let numberOfFoundCheckboxes = await checkboxLocator.count();
    for (let i = 0; i < numberOfFoundCheckboxes; i++) {
      // Act:
      await checkboxLocator.nth(i).check();
      console.log(await resultsLocator.innerText());

      // Assert:
      await expect.soft(resultsLocator).toHaveText(expectedMessages[i]);
    }
  });
});
