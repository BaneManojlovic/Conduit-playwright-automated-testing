import { Page, expect } from '@playwright/test'


export class SettingsPage {

    private readonly page: Page;
    readonly updateSettingsButton;
    readonly logoutButton;
    readonly biographyInputField;

    constructor(page: Page) {
        this.page = page;
        this.updateSettingsButton = page.getByRole('button', { name: 'Update Settings' });
        this.biographyInputField = page.getByPlaceholder('Short bio about you');
        this.logoutButton = page.getByRole('button', { name: 'Or click here to logout' });
    }

    async goToEditProfileSettingsPage() {
        await this.page.goto('/settings');
    }

    async clickOnLogout() {
        await this.logoutButton.click();
    }

    async fillInBiographyDetails(text: string) {
        await this.biographyInputField.fill(text);
    }

    async clickOnUpdateSettingsButton() {
        await this.updateSettingsButton.click();
    }
}