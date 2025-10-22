import { type Locator, type Page } from '@playwright/test';
import { BasePage } from "./base-page.js";
import { fa, faker } from '@faker-js/faker';

export class PIMPage extends BasePage {
    private addEmployeeTab: Locator;
    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private middleNameInput: Locator;
    private employeeIdInput: Locator;
    private generatePasswordCheckbox: Locator;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private confirmPasswordInput: Locator;
    private photoUploadButton: Locator;
    private successMessage: Locator;
    private saveButton: Locator;

    constructor(page: Page) {
        super();
        this.addEmployeeTab = page.getByText('Add Employee');
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.middleNameInput = page.getByPlaceholder('Middle Name');
        this.employeeIdInput = page.locator('//div[2]/div/div/div[2]/input');
        this.generatePasswordCheckbox = page.locator('//label/span');
        this.usernameInput = page.locator('//div/input[@class="oxd-input oxd-input--active"]').nth(2);
        this.passwordInput = page.locator('(//div/input[@class="oxd-input oxd-input--active"])[3]');
        this.confirmPasswordInput = page.locator('(//div/input[@class="oxd-input oxd-input--active"])[4]');
        this.photoUploadButton = page.getByRole('button').locator('.oxd-icon.bi-plus');
        this.successMessage = page.getByText('Successfully Saved');
        this.saveButton = page.getByRole('button', { name: ' Save ' });
    }

    async navigateToAddEmployeeTab() {
        await this.clickElement(this.addEmployeeTab, "Add Employee Tab clicked");
    }

    async fillEmployeeDetails() {
        await this.fillElement(this.firstNameInput, await faker.person.firstName(), "First Name entered");
        await this.fillElement(this.lastNameInput, await faker.person.lastName(), "Last Name entered");
        await this.fillElement(this.middleNameInput, await faker.person.middleName(), "Middle Name entered");
        await this.fillElement(this.employeeIdInput, await faker.string.alpha({ casing: 'lower', length: 9 }), "Employee ID entered");
    }

    async generatePasswordFields() {
        const password = await faker.internet.password();
        const username = await faker.person.firstName() + faker.number.int({ min: 1100, max: 9999 }).toString();

        await this.clickElement(this.generatePasswordCheckbox, "Generate Password Checkbox clicked");
        await this.fillElement(this.usernameInput, username, "Username entered");
        await this.fillElement(this.passwordInput, password, "Password entered: " + password);
        await this.fillElement(this.confirmPasswordInput, password, "Confirm Password entered: " + password);
    }

    async saveEmployeeButton() {
        await this.clickElement(this.saveButton, "Save Button clicked");
    }

    async getSuccessMessageLocator(): Promise<Locator> {
        return this.successMessage;
    }

    async uploadUserPhoto() {
        const path = require('path');
        const filePath = path.join(__dirname, '..', 'constants', 'UserAvatar.png');

        await this.photoUploadButton.waitFor({ state: 'visible' });

        const [fileChooser] = await Promise.all([
            this.photoUploadButton.page().waitForEvent('filechooser'),
            this.photoUploadButton.click()
        ]);
        
        await fileChooser.setFiles(filePath);
    }
}