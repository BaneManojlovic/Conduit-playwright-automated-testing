import { Page } from '@playwright/test';
import { SignUpPage } from './signUpPage';
import { HeaderComponent } from './headerComponent';
import { SignInPage } from './signInPage';
import { ProfilePage } from './profilePage';
import { SettingsPage } from './settingsPage';

export class PageManager {

    private readonly page: Page;
    private readonly signUpPage: SignUpPage;
    private readonly headerComponent: HeaderComponent;
    private readonly signInPage: SignInPage;
    private readonly profilePage: ProfilePage;
    private readonly settingsPage: SettingsPage;

    constructor(page: Page) {
        this.page = page;
        this.signUpPage = new SignUpPage(this.page);
        this.headerComponent = new HeaderComponent(this.page);
        this.signInPage = new SignInPage(this.page);
        this.profilePage = new ProfilePage(this.page);
        this.settingsPage = new SettingsPage(this.page);
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

    onProfilePage() {
        return this.profilePage
    }

    onSettingsPage() {
        return this.settingsPage
    }
}