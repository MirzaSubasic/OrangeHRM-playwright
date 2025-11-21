import { test, expect } from '../fixtures/fixture';
import { TITLES } from '../constants/constants';

test('Verify login functionality', async ({ page }) => {
    // Verify login success
    await expect(page).toHaveURL(TITLES.dashboardPage);
});