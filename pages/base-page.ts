import { expect, Locator } from "@playwright/test";
import { setTimeout } from "timers/promises";

export class BasePage {

    constructor() {}

    protected async clickElement(locator: Locator, logMessage: string) {
        try {
            await expect(locator).toBeVisible({ timeout: 6000 });
            await locator.click();
            console.log(logMessage);
        } catch (error) {
            console.error(`Error clicking element: ${error}`);
            throw error;
        }
    }

    protected async fillElement(locator: Locator, text: string, logMessage: string) {
        try {
            await expect(locator).toBeVisible({ timeout: 6000 });
            await locator.fill(text);
            console.log(logMessage);
        } catch (error) {
            console.error(`Error filling element: ${error}`);
            throw error;
        }
    }

    protected async selectDropdownByValue(locator: Locator, value: string, logMessage: string) {
        try {
            await expect(locator).toBeVisible({ timeout: 6000 });
            await locator.selectOption(value);
            console.log(logMessage);
        } catch (error) {
            console.error(`Error selecting dropdown option: ${error}`);
            throw error;
        }
    }

    protected async clickOnListedOptionsDiv(selectOptionLocator: Locator, value: string, logMessage: string){
        try {
            //set timer to 1.5 seconds so options are loaded
            await setTimeout(1500); 
            await expect(selectOptionLocator).toBeVisible({ timeout: 6000 });
            await selectOptionLocator.click();
            console.log(logMessage);
        } catch (error) {
            console.error(`Error selecting dropdown option: ${error}`);
            throw error;
        }
    }

}