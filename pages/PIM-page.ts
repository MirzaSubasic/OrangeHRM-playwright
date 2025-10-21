import { type Locator, type Page } from '@playwright/test';
import { BasePage } from "./base-page.js";
import { faker } from '@faker-js/faker';

export class PIMPage extends BasePage {
    private createEmployeeTab: Locator;
    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private middleNameInput: Locator;

    constructor(page: Page) {
        super();
        this.createEmployeeTab = page.getByText('Create Employee');
        this.firstNameInput = page.getByLabel('First Name');
        this.lastNameInput = page.getByLabel('Last Name');
        this.middleNameInput = page.getByLabel('Middle Name');
    }

    async navigateToCreateEmployeeTab() {
        await this.clickElement(this.createEmployeeTab, "Create Employee Tab clicked");
    }

    async fillEmployeeDetails() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const middleName = faker.person.firstName();

        await this.fillElement(this.firstNameInput, firstName, "First Name entered");
        await this.fillElement(this.lastNameInput, lastName, "Last Name entered");
        await this.fillElement(this.middleNameInput, middleName, "Middle Name entered");
    }

    private async generateTestImage(): Promise<string> {
        const userAvatar = faker.image.avatar();
        return userAvatar;
    }


}