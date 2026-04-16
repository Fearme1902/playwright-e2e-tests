import playwrightConfig from "../../playwright.config";
import { test, expect } from '@playwright/test';

test.describe("Login Functionality", () =>{

    test.beforeEach("Go to LoginPage", async ({page}) =>{
        //Launch url
    await page.goto("https://katalon-demo-cura.herokuapp.com");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

    //2.Click on make appointment
    await page.getByRole("link", {name:"Make Appointment"}).click();
    await expect(page.getByText("Please login to make appointment.")).toBeVisible();

    })
    test("Test should login successfully", async ({page}) => {
  //Successful Login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", {name:"Login"}).click();

    //3.Assert text
    await expect(page.locator("h2")).toContainText("Make Appointment");

});

test("Should prevent login with incorrect creds", async ({page}) => {

    //Unsuccessful login
    await page.getByLabel("Username").fill("John Smith");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", {name:"Login"}).click();

    //3.Assert a error message
    await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');

});
});

