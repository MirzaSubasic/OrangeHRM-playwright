import { test, expect } from '../fixtures/fixture';

test('Assign leave to employee for todays date', async ({ menuPage, leavePage }) => {
    await menuPage.navigateToLeavePage();

    await leavePage.goToAssignLeaveTab();
    await leavePage.fillLeaveData();    
    await leavePage.submitLeave();
    await leavePage.acceptDialog();

    //check warning message. Currently all users have 0 available days off so every request will be refused
    await expect(await leavePage.getInsuficientLeaveBalanceText()).toBe("Balance not sufficient");
});