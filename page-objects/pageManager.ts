import { Page } from '@playwright/test';
import { SignUpPage } from './signUpPage';
import { HeaderComponent } from './headerComponent';
import { SignInPage } from './signInPage';

export class PageManager {

    private readonly page: Page;
    private readonly signUpPage: SignUpPage;
    private readonly headerComponent: HeaderComponent;
    private readonly signInPage: SignInPage;

    constructor(page: Page) {
        this.page = page;
        this.signUpPage = new SignUpPage(this.page);
        this.headerComponent = new HeaderComponent(this.page);
        this.signInPage = new SignInPage(this.page);
    }

    onSignUpPage() {
        return this.signUpPage
    }

    onHeader() {
        return this.headerComponent
    }

    onSignInPage() {
        return this.signInPage
    }
}