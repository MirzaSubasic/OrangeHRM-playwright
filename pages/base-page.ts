import { Locator } from "@playwright/test";

export class BasePage {

    constructor() {}

    async ClickElement(locator: Locator, logMessage: string) {
        try {
            await locator.click();
            console.log(logMessage);
        } catch (error) {
            console.error(`Error clicking element: ${error}`);
        }
    }

    async FillElement(locator: Locator, text: string, logMessage: string) {
        try {
            await locator.fill(text);
            console.log(logMessage);
        } catch (error) {
            console.error(`Error filling element: ${error}`);
        }
    }

}