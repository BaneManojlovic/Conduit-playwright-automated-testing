import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');

  const title = await page.locator('h1.logo-font');

  // Expect a title "to contain" a substring.
  await expect(title).toHaveText('conduit');
});

