import { Page, expect } from '@playwright/test'

export class HeaderComponent {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async usernamePresent(username: string) {
        const profileLink = this.page.getByRole('link', { name: username });
        await expect(profileLink).toBeVisible();
    }

    async signInPresent() {
        const signInLink = this.page.getByRole('link', { name: 'Sign in'});
        await expect(signInLink).toBeVisible();
    }
}