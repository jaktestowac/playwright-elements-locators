import { test, expect } from "@playwright/test";

test.describe("Find checkbox", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements.html");
  });

  test("Different methods to locate element", async ({ page }) => {
    // Arrange:
    // Find checkbox element using different locators

    // Find by data-testid attribute
    const elementLocatorByDataTestId = page.getByTestId("dti-checkbox");

    // Find by role
    const elementLocatorByRole = page.getByRole("checkbox");

    // Find by ID
    const elementLocatorById = page.locator("#id-checkbox");

    // Find by class
    const elementLocatorByClass = page.locator(".my-checkbox");

    // Find by custom attribute
    const elementLocatorByCustomAttribute = page.locator("[ckbx='val1']");

    // Assert:
    // Check if the element found by each locator is visible
    await expect.soft(elementLocatorByDataTestId).toBeVisible();
    await expect.soft(elementLocatorByRole).toBeVisible();
    await expect.soft(elementLocatorById).toBeVisible();
    await expect.soft(elementLocatorByClass).toBeVisible();
    await expect.soft(elementLocatorByCustomAttribute).toBeVisible();
  });
});
