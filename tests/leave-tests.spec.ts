import { test, expect } from '../fixtures/fixture';

test('Assign leave to employee for todays date', async ({ loginPage, menuPage, leavePage }) => {
    await menuPage.navigateToLeavePage();

    await leavePage.goToAssignLeaveTab();
    await leavePage.fillLeaveData();
    await leavePage.getAvailableLeaveDays();
    await leavePage.submitLeave();

    //test validation - if 0.00 days reject leave
});