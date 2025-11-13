import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LeavePage extends BasePage {
    private assignLeaveButton: Locator;
    private selectEmployeeField: Locator;
    private selectEmployeeOption: Locator;
    private logedInUserText: Locator

    constructor(page: Page){
        super();
        this.assignLeaveButton = page.getByRole("link").getByText("Assign leave");
        this.selectEmployeeField = page.getByPlaceholder("Type for hints");
        this.selectEmployeeOption = page.getByRole("listbox").first();
        this.logedInUserText = page.locator('.oxd-userdropdown-name');
    }

    async goToAssignLeaveTab(){
        await this.clickElement(this.assignLeaveButton, "Leave Button clicked");
    }

    async fillLeaveData(){
        const username = await this.getLogedInUserName() + '';

        //select employee
        await this.fillElement(this.selectEmployeeField, username, "entering employee name in field");
        await this.clickOnListedOptionsDiv(this.selectEmployeeOption, username, "Selected employee")

        //leave type
        //date from
        //date to
    }

    async getAvailableLeaveDays(){
        
    }

    async submitLeave(){

    }

    private async getLogedInUserName(){ return await this.logedInUserText.textContent();}
}