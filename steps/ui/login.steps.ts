import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// Step 1: Navigate to the landing page
Given('I open the Conduit landing page', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
});

// Step 2: Click the top right "Sign in" option
When('I navigate to the sign-in page', async ({ page }) => {
  await page.getByText('Sign in').click();
  await expect(page).toHaveURL(/.*login/);
});

// Step 3: Populate user details and click Submit
When('I submit my email {string} and password {string}', async ({ page }, email: string, password: string) => {
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
});

// Step 4: Verify navigation state changes post-login
Then('I should be logged in and see my feed tabs', async ({ page }) => {
  // Waits for global feed tags context to return from the API
  await page.waitForResponse('https://conduit-api.bondaracademy.com/api/tags');
  
  // Verify that Your Feed UI component tab becomes present on top navigation header view
  const profileTab = page.getByText('Your Feed');
  await expect(profileTab).toBeVisible();
});
