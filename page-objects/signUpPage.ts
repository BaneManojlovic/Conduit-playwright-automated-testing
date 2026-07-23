import { Page } from '@playwright/test'

export class SignUpPage {

    private readonly page: Page
    readonly usernameInputField;
    readonly emailInputField;
    readonly passwordInputField;
    readonly signUpButton;
    readonly errorMessageItem;

    constructor(page: Page){
        this.page = page
        this.usernameInputField = page.getByRole('textbox', { name: 'Username' });
        this.emailInputField = page.getByRole('textbox', { name: 'Email' });
        this.passwordInputField = page.getByRole('textbox', { name: 'Password' });
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
        this.errorMessageItem = page.locator('app-list-errors').getByRole('listitem');
    }

    async goToSignUpPage() {
        await this.page.goto('https://conduit.bondaracademy.com/register');
    }

    async submit() {
        await this.signUpButton.click();
    }

    async fillInUserCredentials(username: string, email: string, password: string) {
        await this.usernameInputField.fill(username);
        await this.emailInputField.fill(email);
        await this.passwordInputField.fill(password);
    }

    async getErrorMessage() {
        await this.errorMessageItem.first().waitFor({ state: 'visible' });
        return this.errorMessageItem.allTextContents();
    }

}