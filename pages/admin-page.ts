import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class AdminPage extends BasePage {
    private selectStatusFilterOnAllUsers: Locator;
    private EnabledOptionInStatusDropdown: Locator;
    private filterButton: Locator;
    private editUserDetailsButton: Locator;
    private userStatusDropdown: Locator;
    private disableOptionInStatusDropdown: Locator;
    private saveUserChangesButton: Locator;
    private successMessage: Locator;

    constructor(page: Page) {
        super();
        this.selectStatusFilterOnAllUsers = page.getByText('-- Select --').nth(1);
        this.EnabledOptionInStatusDropdown = page.getByText('Enabled');
        this.filterButton = page.getByRole('button', { name: 'Search' });
        this.editUserDetailsButton = page.locator('.oxd-table-cell-action-space').nth(1);
        this.userStatusDropdown = page.getByText('Enabled');
        this.disableOptionInStatusDropdown = page.getByText('Disabled');
        this.saveUserChangesButton = page.getByRole('button', { name: 'Save' });
        this.successMessage = page.getByText('Successfully Updated');
    }

    //filter all enabled users
    private async filterEnabledUsersByStatus() {
        await this.clickElement(this.selectStatusFilterOnAllUsers, "Status Filter Dropdown clicked");
        await this.clickElement(this.EnabledOptionInStatusDropdown, "Enabled option selected in Status Dropdown");

        await this.clickElement(this.filterButton, "Filter Button clicked");
    }

    private async openUserDetails(){
        await this.clickElement(this.editUserDetailsButton, "Edit User Details Button clicked");
    }

    private async selectDisableStatusOnSingleUser(){
        await this.clickElement(this.userStatusDropdown, "User Status Dropdown clicked");
        await this.clickElement(this.disableOptionInStatusDropdown, "Disabled option selected in User Status Dropdown");
    }

    private async saveUserChanges(){
        await this.clickElement(this.saveUserChangesButton, "Save User Changes Button clicked");
    }

    async disableUser(){
        await this.filterEnabledUsersByStatus();
        await this.openUserDetails();
        await this.selectDisableStatusOnSingleUser();
        await this.saveUserChanges();
    }

    async getSuccessMessage(): Promise<string> {
        return this.successMessage.innerText();
    }
}