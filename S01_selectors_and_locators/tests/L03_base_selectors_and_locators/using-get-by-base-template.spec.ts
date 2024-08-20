import { test, expect } from "@playwright/test";

test.describe("Finding different elements with getBy methods", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements.html");
  });

  test("Find button element by getByRole methods", async ({ page }) => {
    // TODO:
  });

  test("Find button element by getByText and getByTestId methods", async ({
    page,
  }) => {
    // TODO:
  });

  test("Find label element by getByTestId methods", async ({ page }) => {
    // TODO:
  });
});
