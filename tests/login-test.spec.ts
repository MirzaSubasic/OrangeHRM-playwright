import { test, expect } from '../fixtures/fixture';
import { TITLES } from '../constants/constants';

test('Verify login functionality', async ({ loginPage }) => {
    // Verify login success
    await expect(loginPage).toHaveURL(TITLES.dashboardPage);
});