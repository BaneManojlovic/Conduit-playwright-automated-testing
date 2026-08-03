import { Page, expect } from '@playwright/test'

export class ProfilePage {

    private readonly page: Page;
    readonly editProfileSettingsButton;
    readonly logoutButton;

    constructor(page: Page) {
        this.page = page;
        this.editProfileSettingsButton = page.getByRole('link', {name: 'Edit Profile Settings'})
        this.logoutButton = page.getByRole('button', {name: 'Or click here to logout'});
    }

    async goToEditProfileSettingsPage() {
        await this.page.goto('/settings');
    }

    async usernameHeadingVisible(username: string) {
        await expect(this.page.getByRole('heading', { name: username })).toBeVisible();
    }

    async clickOnEdit() {
        await this.editProfileSettingsButton.click();
    }

    async clickOnLogout() {
        await this.logoutButton.click();
    }
}