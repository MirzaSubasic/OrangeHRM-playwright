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

export const test = base.extend<{ pages: Pages }>({
  page: async ({ page, baseURL }, use) => {
    await page.goto(baseURL!);
    const loginPage = new LoginPage(page);
    await loginPage.enterCredentialsAndLogin(CREDENTIALS.username, CREDENTIALS.password);
    await use(page);
  },

  pages: async ({ page }, use) => {
    const pagesObj: Pages = {
      menuPage: new MenuPage(page),
      adminPage: new AdminPage(page),
      pimPage: new PIMPage(page),
      leavePage: new LeavePage(page),
    };
    await use(pagesObj);
  },
});

export { expect } from '@playwright/test';
