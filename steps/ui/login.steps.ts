import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { PageManager } from '../../page-objects/pageManager';
import { test } from '../../fixtures/testFixtures';



const { Given, When, Then } = createBdd(test);

let email: string;

// Playwright Test Steps

Given('user is on the Sign in page', async({ page }) => {
    await page.goto('/login');
});

When('user click on Sign in text on navigation bar', async({ page }) => {
    await page.getByText('Sign in').click();
});

When('input fields for sign in credentials are empty', async({ page }) => {
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeEmpty();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
});

Then('sign in button is disabled', async({ page }) => {
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeDisabled();
});

When('user enters valid sign in credentials', async({ page, newUser }) => {
    newUser.username = "BaneTest";
    await page.getByRole('textbox', { name: 'Email' }).fill('banetest@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Test123!');
});

When('user click sign in button', async({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onSignInPage().submit();
});






// Given('', async({}) => {

// });

// When('', async({}) => {

// });

// Then('', async({}) => {

// });

// Given('', async({}) => {

// });

// When('', async({}) => {

// });

// Then('', async({}) => {

// });