import { Page, expect } from '@playwright/test'

export class ProfilePage {

    private readonly page: Page;
    readonly editProfileSettingsButton;
    
    constructor(page: Page) {
        this.page = page;
        this.editProfileSettingsButton = page.getByRole('link', {name: 'Edit Profile Settings'})
    }

    async usernameHeadingVisible(username: string) {
        await expect(this.page.getByRole('heading', { name: username })).toBeVisible();
    }

    async clickOnEdit() {
        await this.editProfileSettingsButton.click();
    }

    async biographyTextVisible(text: string) {
        await expect(this.page.getByRole('heading', {name: text})).toBeVisible();
    }

    async bioTextVisible(text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }
}