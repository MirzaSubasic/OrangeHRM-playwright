import { TITLES } from '../constants/constants';
import { test, expect } from '../fixtures/fixture';

test.describe('Admin Menu Item Test', () => {
  test('should navigate to admin section', async ({ page, pages }) => {
    await pages.menuPage.navigateToAdminPage();
    await expect(page).toHaveURL(TITLES.adminPage);
  });

  test('Disable user', async ({ pages }) => {
    await pages.menuPage.navigateToAdminPage();
    await pages.adminPage.disableUser();

    await expect(await pages.adminPage.getSuccessMessage()).toBe('Successfully Updated');
  });

});