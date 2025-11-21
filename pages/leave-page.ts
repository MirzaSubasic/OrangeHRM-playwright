import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LeavePage extends BasePage {
    protected page: Page;
    private assignLeaveTab: Locator;
    private selectEmployeeField: Locator;
    private selectEmployeeOption: Locator;
    private logedInUserText: Locator;
    private leaveTypeDropDown: Locator;
    private leaveTypeDropDownOption: Locator;
    private fromDate: Locator;
    private todayDateButton: Locator;
    private assignLeaveButton: Locator;
    private acceptLeaveButton: Locator;
    private warningText: Locator;

    constructor(page: Page){
        super();
        this.page = page;
        this.assignLeaveTab = page.getByRole("link").getByText("Assign leave");
        this.selectEmployeeField = page.getByPlaceholder("Type for hints");
        this.selectEmployeeOption = page.getByRole("listbox").first();
        this.logedInUserText = page.locator('.oxd-userdropdown-name');
        this.leaveTypeDropDown = page.locator('.oxd-select-text-input').first();
        this.leaveTypeDropDownOption = page.getByText("CAN - Personal");
        this.fromDate = page.getByPlaceholder("yyyy-dd-mm").first();
        this.todayDateButton = page.getByText("Today");
        this.assignLeaveButton = page.getByRole("button", {name: "Assign"});
        this.acceptLeaveButton = page.getByRole("button", {name: "Ok"});
        this.warningText = page.locator('//div[2]/div/div[1]/div[2]/p[1]').first();
    }

    async goToAssignLeaveTab(){
        await this.clickElement(this.assignLeaveTab, "Leave Button clicked");
    }

    async fillLeaveData(){
        const username = await this.getLogedInUserName() + '';

        //select employee
        await this.fillElement(this.selectEmployeeField, username, "entering employee name in field");
        await this.clickOnListedOptionsDiv(this.selectEmployeeOption, username, "Selected employee")

        //date from
        await this.clickElement(this.fromDate, "Clicked on from date field in leave form")
        await this.clickElement(this.todayDateButton, "Clicked today button on calendar")
        
        //leave type
        await this.clickElement(this.leaveTypeDropDown, "Clicked on selecting leave type")
        await this.clickElement(this.leaveTypeDropDownOption, "Clicked wanted leave type")
    }

    async submitLeave(){
        await this.clickElement(this.assignLeaveButton, "Clicked assign button on assign leave form")
    }

    private async getLogedInUserName(){ return await this.logedInUserText.textContent();}

    async acceptDialog() {
        await this.clickElement(this.acceptLeaveButton, "Clicked OK on dialog");
    }

    async getWarningText() {
        await expect(this.warningText).toBeVisible();
        return (await this.warningText.textContent())?.trim();
    }
}