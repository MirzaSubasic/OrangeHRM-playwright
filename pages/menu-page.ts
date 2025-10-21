import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class MenuPage extends BasePage {
    private adminMenuItem: Locator;
    private pimMenuItem: Locator;

    constructor(page: Page) {
        super();
        this.adminMenuItem = page.getByRole("navigation").getByText("Admin");
        this.pimMenuItem = page.getByRole("navigation").getByText("PIM");
    }

    async navigateToAdminPage() {
        await this.clickElement(this.adminMenuItem, "Admin Menu Item clicked");
    }

    async navigateToPIMPage() {
        await this.clickElement(this.pimMenuItem, "PIM Menu Item clicked");
    }
}