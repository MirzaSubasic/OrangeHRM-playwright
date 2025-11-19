import { test, expect } from '../fixtures/fixture';

test('Assign leave to employee for todays date', async ({ loginPage, menuPage, leavePage }) => {
    await menuPage.navigateToLeavePage();

    await leavePage.goToAssignLeaveTab();
    await leavePage.fillLeaveData();    
    await leavePage.submitLeave();
    await leavePage.acceptDialog();
    
    await expect(leavePage.getWarningText()).toBe("Warning");
});