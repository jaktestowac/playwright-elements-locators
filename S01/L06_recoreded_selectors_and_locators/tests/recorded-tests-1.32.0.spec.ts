import { test, expect } from "@playwright/test";

test.describe("Finding different elements using Playwright 1.32.0 codegen", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements.html");
  });

  test("Test page with IDs generated by codegen", async ({ page }) => {
    // steps:
    await page.goto("http://localhost:3000/practice/simple-elements.html");
    
    await page.getByTestId("dti-label-element").click();
    await page.getByTestId("dti-button-element").click();
    await page.getByTestId("dti-checkbox").check();
    await page.getByTestId("dti-input").click();
    await page.getByTestId("dti-input").fill("test input");
    await page.getByTestId("dti-input").press("Enter");
    await page.getByTestId("dti-textarea").click();
    await page.getByTestId("dti-textarea").fill("test area");
    await page.getByTestId("dti-dropdown").selectOption("option2");
    await page.getByTestId("dti-radio1").check();
    await page.getByTestId("dti-radio2").check();
    await page.getByTestId("dti-radio3").check();
    await page.getByTestId("dti-range").click();
  });

  test("Test page with no IDs generated by codegen", async ({ page }) => {
    // steps:
    await page.goto(
      "http://localhost:3000/practice/simple-elements-no-ids.html"
    );

    await page.getByText("Some text for label").click();
    await page.getByRole("button", { name: "Click me!" }).click();
    await page.getByRole("checkbox").check();
    await page.locator('input[type="text"]').click();
    await page.locator('input[type="text"]').fill("test input");
    await page.locator('input[type="text"]').press("Enter");
    await page.locator("textarea").click();
    await page.locator("textarea").fill("test area");
    await page.getByRole("combobox").selectOption("option2");
    await page.getByRole("radio").first().check();
    await page.getByRole("radio").nth(1).check();
    await page.getByRole("radio").nth(2).check();
    await page.getByRole('slider').click();
  });
});
