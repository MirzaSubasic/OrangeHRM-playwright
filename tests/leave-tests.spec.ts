import { test, expect } from '../fixtures/fixture';

test('Assign leave to employee for todays date', async ({ pages }) => {
    await pages.menuPage.navigateToLeavePage();

    await pages.leavePage.goToAssignLeaveTab();
    await pages.leavePage.fillLeaveData();    
    await pages.leavePage.submitLeave();
    await pages.leavePage.acceptDialog();

    //check warning message. Currently all users have 0 available days off so every request will be refused
    await expect(await pages.leavePage.getInsuficientLeaveBalanceText()).toBe("Balance not sufficient");
});