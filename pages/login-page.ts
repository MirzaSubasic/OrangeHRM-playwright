import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super();
    this.usernameInput = page.getByPlaceholder('username');
    this.passwordInput = page.getByPlaceholder('password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async enterCredentialsAndLogin(username: string, password: string) {
    await this.FillElement(this.usernameInput, username, "Username input filled");
    await this.FillElement(this.passwordInput, password, "Password input filled");
    await this.ClickElement(this.loginButton, "Login Button clicked");
  }
}