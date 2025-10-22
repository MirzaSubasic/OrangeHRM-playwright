    import { test, expect } from '../fixtures/fixture';

test('Add new user', async ({ loginPage, menuPage, pimPage}) => {
    await menuPage.navigateToPIMPage();

    await pimPage.navigateToAddEmployeeTab();
    await pimPage.fillEmployeeDetails();
    await pimPage.generatePasswordFields();

    // Add assertions as needed to verify user addition
    const successMessageLocator = await pimPage.getSuccessMessageLocator();
    
    await expect(successMessageLocator).toHaveText('Successfully Saved');
});