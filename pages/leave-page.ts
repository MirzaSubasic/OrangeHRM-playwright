import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LeavePage extends BasePage {
    private assignLeaveButton: Locator;

    constructor(page: Page){
        super();
        this.assignLeaveButton = page.getByRole("link").getByText("Assign leave");
    }

    async goToAssignLeaveTab(){
        await this.clickElement(this.assignLeaveButton, "Leave Button clicked");
    }

    async fillLeaveData(){

    }

    async submitLeave(){

    }
}