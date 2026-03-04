import { test, expect } from '../fixtures/fixture';

test('Add new user', async ({ pages}) => {
    await pages.menuPage.navigateToPIMPage();

    await pages.pimPage.navigateToAddEmployeeTab();
    await pages.pimPage.fillEmployeeDetails();
    await pages.pimPage.saveEmployeeButton();

    const successMessageLocator = await pages.pimPage.getSuccessMessageLocator();

    await expect(successMessageLocator).toHaveText('Successfully Saved');
});

test('Add new user with credentials and photo', async ({ pages }) => {
    await pages.menuPage.navigateToPIMPage();

    await pages.pimPage.navigateToAddEmployeeTab();
    await pages.pimPage.fillEmployeeDetails();
    await pages.pimPage.uploadUserPhoto();
    await pages.pimPage.generatePasswordFields();
    await pages.pimPage.saveEmployeeButton();

    const successMessageLocator = await pages.pimPage.getSuccessMessageLocator();
    
    await expect(successMessageLocator).toHaveText('Successfully Saved');
});