import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class MenuPage extends BasePage {
    private adminMenuItem: Locator;

    constructor(page: Page) {
        super();
        this.adminMenuItem = page.getByRole("navigation").getByText("Admin");
    }

    async navigateToAdminSection() {
        await this.ClickElement(this.adminMenuItem, "Admin Menu Item clicked");
    } 
}