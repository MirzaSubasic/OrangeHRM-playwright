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
    private successMessage: Locator;

    constructor(page: Page) {
        super();
        this.addEmployeeTab = page.getByText('Add Employee');
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.middleNameInput = page.getByPlaceholder('Middle Name');
        this.employeeIdInput = page.locator('//div[2]/div/div/div[2]/input');
        this.generatePasswordCheckbox = page.locator('//label/span');
        this.usernameInput = page.locator('//div/input[@class="oxd-input oxd-input--active"]').nth(2);
        this.passwordInput = page.locator('//div/input[@class="oxd-input oxd-input--active"]').nth(3);
        this.confirmPasswordInput = page.locator('//div/input[@class="oxd-input oxd-input--active"]').nth(4);
        this.successMessage = page.getByText('Successfully Saved');
    }

    async navigateToAddEmployeeTab() {
        await this.clickElement(this.addEmployeeTab, "Add Employee Tab clicked");
    }

    async fillEmployeeDetails() {
        await this.fillElement(this.firstNameInput, await this.getFirstName(), "First Name entered");
        await this.fillElement(this.lastNameInput, await this.getLastName(), "Last Name entered");
        await this.fillElement(this.middleNameInput, await this.getMiddleName(), "Middle Name entered");
        await this.fillElement(this.employeeIdInput, await this.getEmployeeId(), "Employee ID entered");
    }

    async generatePasswordFields() {
        const password = await this.generatePassword();
        const username = await this.getFirstName().then(firstName => firstName?.toLowerCase() + faker.string.numeric(6));

        await this.clickElement(this.generatePasswordCheckbox, "Generate Password Checkbox clicked");
        await this.fillElement(this.usernameInput, username, "Username entered");
        await this.fillElement(this.passwordInput, password, "Password entered");
        await this.fillElement(this.confirmPasswordInput, password, "Confirm Password entered");
    }

    async getSuccessMessageLocator(): Promise<Locator> {
        return this.successMessage;
    }

    private async getFirstName(): Promise<string> {
        return faker.person.firstName();
    }

    private async getLastName(): Promise<string> {
        return faker.person.lastName();
    }

    private async getMiddleName(): Promise<string> {
        return faker.person.middleName();
    }

    private async getEmployeeId(): Promise<string> {
        return faker.string.uuid().length > 8 ? faker.string.uuid().slice(0, 8) : faker.string.uuid();
    }

    private async generatePassword(): Promise<string> {
        return faker.internet.password();
    }
}