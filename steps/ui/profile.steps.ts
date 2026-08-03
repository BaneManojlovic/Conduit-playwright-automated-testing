import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { PageManager } from '../../page-objects/pageManager';
import { test } from '../../fixtures/testFixtures';
import { existingUser } from '../../fixtures/testData';
import { PassThrough } from 'node:stream';

const { Given, When, Then } = createBdd(test);


// Playwright Test Steps

When('user is logged in and have username displayed', async ({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onSignInPage().login(existingUser.email, existingUser.password);
    await pageManager.onHeader().usernamePresent(existingUser.username);
});

When('user click on username link on navigation bar', async({ page }) => {
    await page.getByRole('link', { name: existingUser.username }).click();
});

Then('user is redirected to Profile page', async({ page }) => {
    await expect(page).toHaveURL(/.*profile/);
    const pageManager = new PageManager(page);
    await pageManager.onProfilePage().usernameHeadingVisible(existingUser.username);
});

When('user click on Edit Profile Settings button', async({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onProfilePage().clickOnEdit();
});

Then('user is redirected to Settings page', async({ page }) => {
    await expect(page).toHaveURL(/.*settings/);
});

When('user is currently redirected to Settings page', async({ page }) => {
    await expect(page).toHaveURL(/.*settings/);
});

When('user click on logout button', async({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onProfilePage().clickOnLogout();
});

Then('user is redirected to Home page and have no username displayed', async({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onHeader().signInPresent();
});

