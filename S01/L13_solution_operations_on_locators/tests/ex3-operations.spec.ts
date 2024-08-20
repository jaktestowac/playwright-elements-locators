import { test, expect } from "@playwright/test";

test.describe("Reservation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-reservation-v1.html");
  });

  test("simple reservation with one feature", async ({ page }) => {
    // Arrange:
    const expectedMessage =
      "Reservation for 23.10.2024 with features: Food for total price: 150$";

    const resultsTestId = "dti-results";
    const rowRole = "row";
    const buttonRole = "button";
    const checkboxRole = "checkbox";
    const featureText = "Food";
    const reservationDate = "23.10.2024";
    const checkoutButtonText = "Checkout";

    const resultsLocator = page.getByTestId(resultsTestId);

    const checkboxLocator = page
      .getByRole(rowRole, { name: featureText })
      .getByRole(checkboxRole);

    const reserveButtonLocator = page
      .getByRole(rowRole, { name: reservationDate })
      .getByRole(buttonRole);

    const checkoutButtonLocator = page
      .getByRole(buttonRole)
      .filter({ hasText: checkoutButtonText });

    // Act:
    await checkboxLocator.check();
    await reserveButtonLocator.click();
    await checkoutButtonLocator.click();

    // Assert:
    await expect(resultsLocator).toHaveText(expectedMessage);
  });
});
