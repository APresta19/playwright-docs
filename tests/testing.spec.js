//@ts-check

import {test, expect} from '@playwright/test';

test('has title', async ({page}) => {
    //move page to the proper url
    await page.goto("https://playwright.dev");

    //expect a title to contain a substring
    await expect(page).toHaveTitle(/Playwright/)
});

test('get started link', async ({page}) => {
    await page.goto("https://playwright.dev");

    //click the get started link 
    //the page.getByRole part is called a locator: a way to find elements on the page at any moment
    await page.getByRole("link", {name: "Get started"}).click();

    //expects the page to have the heading with the name of Installation
    await expect(page.getByRole("heading", {name: "Installation"})).toBeVisible(); 
});