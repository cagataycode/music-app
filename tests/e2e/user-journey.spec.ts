import { test, expect } from "@playwright/test";

test("user journey", async ({ page }) => {
  await page.goto("http://localhost:3000/signin");
  await page.getByPlaceholder("first name").fill("john");
  await page.getByPlaceholder("last name").fill("doe");
  await page.getByPlaceholder("email").fill("johndoe");
  await page.getByPlaceholder("email").fill("johndoe@john.com");
  await page.getByPlaceholder("password").fill("1234");
  await page.getByRole("button", { name: "signin" }).click();
  await page.getByRole("link", { name: "Playlist 1", exact: true }).click();
  await page.getByLabel("play").click();
  await page.getByLabel("shuffle").click();
  await page.getByLabel("next").click();
  await page.getByLabel("next").click();
  await page.getByLabel("shuffle").click();
  await page.getByLabel("min").click();
  await page.getByLabel("min").click();
  await page.getByRole("gridcell", { name: "Eternal Springtime" }).click();
  await page.getByLabel("min").click();
  await page.getByLabel("min").click();
  await page.getByLabel("min").click();
  await page.getByLabel("repeat").click();
  await page.getByLabel("next").click();
  await page.getByLabel("next").click();
  await page.getByLabel("min").click();
  await page.getByLabel("pause").click();
});
