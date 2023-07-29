import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto("http://localhost:3000/signin");
  await page.getByPlaceholder("first name").click();
  await page.getByPlaceholder("first name").fill("john");
  await page.getByPlaceholder("last name").click();
  await page.getByPlaceholder("last name").fill("doe");
  await page.getByPlaceholder("email").click();
  await page.getByPlaceholder("email").fill("johndoe@john.com");
  await page.getByPlaceholder("password").click();
  await page.getByPlaceholder("password").fill("1234");
  await page.getByRole("button", { name: "signin" }).click();

  await expect(page).toHaveURL("http://localhost:3000/");
});
