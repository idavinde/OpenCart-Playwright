import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage"

export class NewsLetterSubscriptionPage extends BasePage{

    private readonly subscribeButtonLocator: Locator;

    constructor(page: Page){
        super(page);

        this.subscribeButtonLocator = page.locator('#input-newsletter');
    }

    async isNewsletterSubscriptionChecked():Promise<boolean> {

       return await this.subscribeButtonLocator.isChecked();

    }
}