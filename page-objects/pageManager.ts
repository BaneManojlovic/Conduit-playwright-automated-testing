import { Page } from '@playwright/test';
import { SignUpPage } from './signUpPage';  

export class PageManager {

    private readonly page: Page;
    private readonly signUpPage: SignUpPage;

    constructor(page: Page) {
        this.page = page;
        this.signUpPage = new SignUpPage(this.page);
    }

    onSignUpPage() {
        return this.signUpPage
    }
}