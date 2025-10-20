import { test as base, expect, Page } from '@playwright/test';
import { CREDENTIALS } from '../constants/constants';
import { TITLES } from '../constants/constants';
import { LoginPage } from '../pages/login-page';

type MyFixtures = {
  loginPage: Page;
};

// Extend the base test
export const test = base.extend<MyFixtures>({
  // Custom fixture to log in before each test
  loginPage: async ({ page, baseURL }, use) => {
    // Go to base URL (login page)
    await page.goto(baseURL!);
    await expect(page).toHaveTitle(TITLES.loginPage);

    // Perform login
    const loginPage = new LoginPage(page);
    await loginPage.login(CREDENTIALS.username, CREDENTIALS.password);

    // Use the logged-in page in tests
    await use(page);
  },
});

export { expect } from '@playwright/test';