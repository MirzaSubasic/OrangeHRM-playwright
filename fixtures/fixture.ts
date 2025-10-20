import { test as base, expect, Page } from '@playwright/test';

type MyFixtures = {
  loginPage: Page;
};

// Extend the base test
export const test = base.extend<MyFixtures>({
  // Custom fixture to log in before each test
  loginPage: async ({ page, baseURL }, use) => {
    // Go to base URL (login page)
    await page.goto(baseURL!);
    await expect(page).toHaveTitle(/OrangeHRM/);

    // Perform login
    

    // Verify login success

    // Use the logged-in page in tests
    await use(page);
  },
});

export { expect } from '@playwright/test';