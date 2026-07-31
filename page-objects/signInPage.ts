import { Page } from '@playwright/test'

export class SignInPage {

    private readonly page: Page;
    readonly emailInputField;
    readonly passwordInputField;
    readonly signInButton;
    readonly errorMessageItem;

    constructor(page: Page) {
        this.page = page;
        this.emailInputField = page.getByRole('textbox', { name: 'Email' });
        this.passwordInputField = page.getByRole('textbox', { name: 'Password' });
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
        this.errorMessageItem = page.locator('app-list-errors').getByRole('listitem');
    }

    async goToSignInPage() {
        await this.page.goto('/login');
    }

    async submit() {
        await this.signInButton.click();
    }

     async fillInUserCredentials(email: string, password: string) {
        await this.emailInputField.fill(email);
        await this.passwordInputField.fill(password);
    }

    async getErrorMessage() {
        await this.errorMessageItem.first().waitFor({ state: 'visible' });
        return this.errorMessageItem.allTextContents();
    }
}