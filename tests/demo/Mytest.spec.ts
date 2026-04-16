import playwrightConfig from "../../playwright.config";
import { test, expect } from '@playwright/test';

test("Test should load homepage with correct title", async ({page}) => {
    //1.Go to homepage
    await page.goto("https://katalon-demo-cura.herokuapp.com");
    //2.Assert if title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service");
    //3.Assert header text
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

});

test("Title should be put here", {tag: "@smoke" }, async ({}, testInfo) => {
//steps
});
