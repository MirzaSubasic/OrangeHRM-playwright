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
    await adminPage.disableUser();

    await expect(await adminPage.getSuccessMessage()).toBe('Successfully Updated');
  });

});