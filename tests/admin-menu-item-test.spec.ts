import { TITLES } from '../constants/constants';
import { test, expect } from '../fixtures/fixture';

test.describe('Admin Menu Item Test', () => {
  test('should navigate to admin section', async ({ loginPage, menuPage }) => {
    await menuPage.navigateToAdminSection();
    await expect(loginPage).toHaveURL(TITLES.adminPage);
  });

  test('Disable user', async ({ loginPage, menuPage, adminPage }) => {
    test.slow();

    await menuPage.navigateToAdminSection();
    const initialCount = await adminPage.countEnabledUsers();
    await adminPage.disableUser();
    await loginPage.waitForTimeout(5000); // 5000 milliseconds = 5 seconds
    const finalCount = await adminPage.countEnabledUsers();

    await expect(finalCount).toEqual(initialCount - 1);
  });

});