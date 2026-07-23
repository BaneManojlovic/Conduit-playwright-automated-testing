import { Page } from '@playwright/test';
import { SignUpPage } from './signUpPage';
import { HeaderComponent } from './headerComponent';

export class PageManager {

    private readonly page: Page;
    private readonly signUpPage: SignUpPage;
    private readonly headerComponent: HeaderComponent;

    constructor(page: Page) {
        this.page = page;
        this.signUpPage = new SignUpPage(this.page);
        this.headerComponent = new HeaderComponent(this.page);
    }

    onSignUpPage() {
        return this.signUpPage
    }

    onHeader() {
        return this.headerComponent
    }
}