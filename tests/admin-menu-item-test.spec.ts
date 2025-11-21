import { TITLES } from '../constants/constants';
import { test, expect } from '../fixtures/fixture';

test.describe('Admin Menu Item Test', () => {
  test('should navigate to admin section', async ({ menuPage, page }) => {
    await menuPage.navigateToAdminPage();
    await expect(page).toHaveURL(TITLES.adminPage);
  });

  test('Disable user', async ({ menuPage, adminPage }) => {
    test.slow();

    await menuPage.navigateToAdminPage();
    await adminPage.disableUser();

    await expect(await adminPage.getSuccessMessage()).toBe('Successfully Updated');
  });

});