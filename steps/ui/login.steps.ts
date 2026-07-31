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


When('user enter sign in credentials with invalid email', async({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onSignInPage().fillInUserCredentials('x', 'Test123!');
});

When('user enter sign in credentials with invalid password', async({ page }) => {
    const pageManager = new PageManager(page);
await pageManager.onSignInPage().fillInUserCredentials('banetest@gmail.com', 'x');    
});

When('user enter sign in credentials with all invalid data', async({ page }) => {
    const pageManager = new PageManager(page);
await pageManager.onSignInPage().fillInUserCredentials('x', 'x');    
});

Then('error message about invalid credentials is shown', async({ page }) => {
    const pageManager = new PageManager(page);
    const errorMessage = await pageManager.onSignInPage().getErrorMessage();
    expect(errorMessage[0]).toEqual('email or password is invalid');
});