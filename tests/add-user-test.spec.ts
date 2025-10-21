    import { test, expect } from '../fixtures/fixture';

test('Add new user', async ({ loginPage, menuPage, pimPage}) => {
    await menuPage.navigateToPIMPage();

    await pimPage.navigateToCreateEmployeeTab();
    await pimPage.fillEmployeeDetails();

});