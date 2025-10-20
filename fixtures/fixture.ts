import { test as base, expect, Page } from '@playwright/test';
import { CREDENTIALS } from '../constants/constants';
import { TITLES } from '../constants/constants';
import { LoginPage } from '../pages/login-page';
import { MenuPage } from '../pages/menu-page';

type MyFixtures = {
  loginPage: Page;
  menuPage: MenuPage;
};

// Extend the base test
export const test = base.extend<MyFixtures>({
  // Custom fixture to log in before each test
  loginPage: async ({ page, baseURL }, use) => {
    await page.goto(baseURL!);
    await expect(page).toHaveTitle(TITLES.loginPage);

    const loginPage = new LoginPage(page);
    await loginPage.enterCredentialsAndLogin(CREDENTIALS.username, CREDENTIALS.password);

    await use(page);
  },

  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);
    await use(menuPage);
  }

});

export { expect } from '@playwright/test';