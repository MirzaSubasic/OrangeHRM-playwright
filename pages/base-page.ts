import { expect, Locator } from "@playwright/test";

export class BasePage {

    constructor() {}

    protected async clickElement(locator: Locator, logMessage: string) {
        try {
            await expect(locator).toBeVisible({ timeout: 6000 });
            await locator.click();
            console.log(logMessage);
        } catch (error) {
            console.error(`Error clicking element: ${error}`);
        }
    }

    protected async fillElement(locator: Locator, text: string, logMessage: string) {
        try {
            await expect(locator).toBeVisible({ timeout: 6000 });
            await locator.fill(text);
            console.log(logMessage);
        } catch (error) {
            console.error(`Error filling element: ${error}`);
        }
    }

    protected async selectDropdownByValue(locator: Locator, value: string, logMessage: string) {
        try {
            await expect(locator).toBeVisible({ timeout: 6000 });
            await locator.selectOption(value);
            console.log(logMessage);
        } catch (error) {
            console.error(`Error selecting dropdown option: ${error}`);
        }
    }

}