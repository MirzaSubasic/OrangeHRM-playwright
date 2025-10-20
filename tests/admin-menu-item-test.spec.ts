import { TITLES } from '../constants/constants';
import { test, expect } from '../fixtures/fixture';

test.describe('Admin Menu Item Test', () => {
  test('should navigate to admin section', async ({ loginPage, menuPage }) => {
    await menuPage.navigateToAdminSection();
    await expect(loginPage).toHaveURL(TITLES.adminPage);
  });

  test('Disable user', async ({ loginPage, menuPage }) => {
    await menuPage.navigateToAdminSection();

    // Additional steps to disable a user would go here

    // Example assertion (to be replaced with actual verification logic)
    // await expect(someElement).toHaveText('User Disabled');

  });
});