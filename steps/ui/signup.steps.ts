import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// Playwright Test Steps

Given('user is on home page', async({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
});

When('user click on Sign up text on navigation bar', async({ page }) => {
    await page.getByText('Sign up').click();
});

Then('user is redirected to Sign up page', async({ page }) => {
    await expect(page).toHaveURL(/.*register/);
    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
});


Given('user is on the Sign up page', async({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/register');
});

When('user click on the Have an account link', async({ page }) => {
    await page.getByText('Have an account?').click();
});

Then('user is redirected to Sign in page', async({ page }) => {
    await expect(page).toHaveURL(/.*login/);
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
});

Given('input fields for credentials are empty', async({ page }) => {
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeEmpty();
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeEmpty();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
});

Then('sign up button is disabled', async({ page }) => {
    await expect(page.getByRole('button', { name: 'Sign up' })).toBeDisabled();
});





// Given('', async({ }) => {

// });

// When('', async({ }) => {

// });

// Then('', async({ }) => {

// });

// Given('', async({ }) => {

// });

// When('', async({ }) => {

// });

// Then('', async({ }) => {

// });