import { Locator } from "@playwright/test";

export class BasePage {

    constructor() {}

    async clickElement(locator: Locator, logMessage: string) {
        try {
            await locator.click();
            console.log(logMessage);
        } catch (error) {
            console.error(`Error clicking element: ${error}`);
        }
    }

    async fillElement(locator: Locator, text: string, logMessage: string) {
        try {
            await locator.fill(text);
            console.log(logMessage);
        } catch (error) {
            console.error(`Error filling element: ${error}`);
        }
    }

    async selectDropdownByValue(locator: Locator, value: string, logMessage: string) {
        try {
            await locator.selectOption({ value });
            console.log(logMessage);
        } catch (error) {
            console.error(`Error selecting dropdown option: ${error}`);
        }
    }

}