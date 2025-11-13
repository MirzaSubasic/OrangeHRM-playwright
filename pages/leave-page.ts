import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LeavePage extends BasePage {
    private assignLeaveButton: Locator;
    private selectEmployeeField: Locator;
    private selectEmployeeOption: Locator;
    private logedInUserText: Locator;
    private leaveTypeDropDown: Locator;
    private fromDate: Locator;
    private toDate: Locator;
    private todayDateButton: Locator;

    constructor(page: Page){
        super();
        this.assignLeaveButton = page.getByRole("link").getByText("Assign leave");
        this.selectEmployeeField = page.getByPlaceholder("Type for hints");
        this.selectEmployeeOption = page.getByRole("listbox").first();
        this.logedInUserText = page.locator('.oxd-userdropdown-name');
        this.leaveTypeDropDown = page.locator('.oxd-select-text-input');
        this.fromDate = page.getByPlaceholder("yyyy-dd-mm").first();
        this.toDate = page.getByPlaceholder("yyyy-dd-mm").nth(1);
        this.todayDateButton = page.getByRole('button', {name: 'Today'});
    }

    async goToAssignLeaveTab(){
        await this.clickElement(this.assignLeaveButton, "Leave Button clicked");
    }

    async fillLeaveData(){
        const username = await this.getLogedInUserName() + '';

        //select employee
        await this.fillElement(this.selectEmployeeField, username, "entering employee name in field");
        await this.clickOnListedOptionsDiv(this.selectEmployeeOption, username, "Selected employee")

        //date from
        await this.clickElement(this.fromDate, "Clicked on from date field in leave form")
        await this.clickElement(this.todayDateButton, "Clicked today button on calendar")

        //date to
        await this.clickElement(this.toDate, "Clicked on to date field in leave form")
        await this.clickElement(this.todayDateButton, "Clicked today button on calendar")
        
        //leave type
        await this.selectDropdownByValue(this.leaveTypeDropDown, "US - Vacation", "Selecting leave type")
    }

    async getAvailableLeaveDays(){

    }

    async submitLeave(){

    }

    private async getLogedInUserName(){ return await this.logedInUserText.textContent();}
}