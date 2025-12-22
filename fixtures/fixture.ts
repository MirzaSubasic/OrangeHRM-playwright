import { test as base } from '@playwright/test';
import { CREDENTIALS } from '../constants/constants';
import { LoginPage } from '../pages/login-page';
import { MenuPage } from '../pages/menu-page';
import { AdminPage } from '../pages/admin-page';
import { PIMPage } from '../pages/PIM-page';
import { LeavePage } from '../pages/leave-page';

type Pages = {
  menuPage: MenuPage;
  adminPage: AdminPage;
  pimPage: PIMPage;
  leavePage: LeavePage;
};

export const test = base.extend<Pages>({
  // Login happens ONCE before each test
  page: async ({ page, baseURL }, use) => {
    await page.goto(baseURL!);

    const loginPage = new LoginPage(page);
    await loginPage.enterCredentialsAndLogin(CREDENTIALS.username, CREDENTIALS.password);

    await use(page);
  },

  menuPage: async ({ page }, use) => {
    await use(new MenuPage(page));
  },

  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },

  pimPage: async ({ page }, use) => {
    await use(new PIMPage(page));
  },

  leavePage: async ({ page }, use) => {
    await use(new LeavePage(page));
  },
});

export { expect } from '@playwright/test';