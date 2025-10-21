import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class AdminPage extends BasePage {
    private selectStatusFilterOnAllUsers: Locator;
    private editUserDetailsButton: Locator;
    private userStatusDropdown: Locator;
    private EnabledTextLocator: Locator[];

    constructor(page: Page) {
        super();
        this.selectStatusFilterOnAllUsers = page.getByLabel('-- Select --', { exact: true }).nth(1);
        this.editUserDetailsButton = page.getByRole('button').locator('.oxd-icon bi-pencil-fill');
        this.userStatusDropdown = page.getByText('Enabled');
        this.EnabledTextLocator = page.getByText('Enabled', { exact: true }).InnerTexts();
    }

    //filter all enabled users
    private async filterEnabledUsersByStatus() {
        await this.selectDropdownByValue(this.selectStatusFilterOnAllUsers, "Enabled", `Filtered users by status: Enabled`);
    }

    private async openUserDetails(){
        await this.clickElement(this.editUserDetailsButton, "Edit User Details Button clicked");
    }

    private async selectDisableStatusOnSingleUser(){
        await this.selectDropdownByValue(this.userStatusDropdown, "Disabled", `Selected user status: Disabled`);
    }

    async disableUser(){
        await this.filterEnabledUsersByStatus();
        await this.openUserDetails();
        await this.selectDisableStatusOnSingleUser();
    }

    async countEnabledUsers(): Promise<number> {
        // finish this method to return the count of enabled users
        console.log(`Number of enabled users: ${this.EnabledTextLocator.length}`);
        return this.EnabledTextLocator.length;
    }

}