    import { test, expect } from '../fixtures/fixture';

test('Add new user', async ({ menuPage, pimPage}) => {
    await menuPage.navigateToPIMPage();

    await pimPage.navigateToAddEmployeeTab();
    await pimPage.fillEmployeeDetails();
    await pimPage.saveEmployeeButton();

    const successMessageLocator = await pimPage.getSuccessMessageLocator();

    await expect(successMessageLocator).toHaveText('Successfully Saved');
});

test('Add new user with credentials and photo', async ({ menuPage, pimPage}) => {
    await menuPage.navigateToPIMPage();

    await pimPage.navigateToAddEmployeeTab();
    await pimPage.fillEmployeeDetails();
    await pimPage.uploadUserPhoto();
    await pimPage.generatePasswordFields();
    await pimPage.saveEmployeeButton();

    const successMessageLocator = await pimPage.getSuccessMessageLocator();
    
    await expect(successMessageLocator).toHaveText('Successfully Saved');
});