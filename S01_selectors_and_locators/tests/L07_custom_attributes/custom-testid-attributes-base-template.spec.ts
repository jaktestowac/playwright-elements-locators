import { test, expect } from "@playwright/test";

test.describe("Finding elements using getByTestId and locators", () => {
  test.use({ testIdAttribute: "pw-test" });

  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements-custom-attribute.html");
  });

  test("click the button (using getByTestId)", async ({ page }) => {
    // Arrange:
    // Act:
    // Assert:
  });

  test("click the button (using locator)", async ({ page }) => {
    // Arrange:
    // Act:
    // Assert:
  });
});
