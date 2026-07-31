import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { PageManager } from '../../page-objects/pageManager';
import { test } from '../../fixtures/testFixtures';

const { Given, When, Then } = createBdd(test);

let username: string;
let email: string;

// Playwright Test Steps

Given('user is on home page', async({ page }) => {
    await page.goto('/');
});

When('user click on Sign up text on navigation bar', async({ page }) => {
    await page.getByText('Sign up').click();
});

Then('user is redirected to Sign up page', async({ page }) => {
    await expect(page).toHaveURL(/.*register/);
    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
});

Given('user is on the Sign up page', async({ page }) => {
    await page.goto('/register');
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

Given('user fill in credentials with valid data', async({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('Bane01');
    await page.getByRole('textbox', { name: 'Email' }).fill('test01@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Test123!');
});

Then('sign up button is enabled', async({ page }) => {
    await expect(page.getByRole('button', { name: 'Sign up' })).toBeEnabled();
});

When('user enter credentials with invalid username value', async({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onSignUpPage().fillInUserCredentials('x', 'tems@gmail.com', 'Test123!');
});

When('user enter credentials with invalid email value', async({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onSignUpPage().fillInUserCredentials('Test User', 'x', 'Test123!');
});

When('user enter credentials with invalid password value', async({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onSignUpPage().fillInUserCredentials('Test User', 'test@gmail.com', 'x');
});

When('user enter credentials with all invalid values', async({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onSignUpPage().fillInUserCredentials('x', 'x', 'x');
});

When('user click sign up button', async({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onSignUpPage().submit();
});

Then('error message about invalid username is shown', async({ page }) => {
    const pageManager = new PageManager(page);
    const errorMessage = await pageManager.onSignUpPage().getErrorMessage();
    expect(errorMessage[0]).toEqual('username is too short (minimum is 3 characters)');
});

Then('error message about invalid email is shown', async({ page }) => {
    const pageManager = new PageManager(page);
    const errorMessage = await pageManager.onSignUpPage().getErrorMessage();
    expect(errorMessage[0]).toEqual('email is invalid');
});

Then('error message about invalid password is shown', async({ page }) => {
    const pageManager = new PageManager(page);
    const errorMessage = await pageManager.onSignUpPage().getErrorMessage();
    expect(errorMessage[0]).toEqual('password is too short (minimum is 8 characters)');
});

Then('all three error messages are shown', async({ page }) => {
    const pageManager = new PageManager(page);
    const errorMessage = await pageManager.onSignUpPage().getErrorMessage();
    expect(errorMessage[0]).toEqual('email is invalid');
    expect(errorMessage[1]).toEqual('username is too short (minimum is 3 characters)');
    expect(errorMessage[2]).toEqual('password is too short (minimum is 8 characters)');
});

When('user enters valid signup credentials', async({ page, newUser }) => {
    const pageManager = new PageManager(page);
    const uniqueId = Date.now();
  
    await pageManager.onSignUpPage().fillInUserCredentials(
        newUser.username, 
        newUser.email, 
        'Test123!');
});

Then('user is redirected to home page and have username displayed', async({ page, newUser }) => {
    const pageManager = new PageManager(page);
    await pageManager.onHeader().usernamePresent(newUser.username);
});