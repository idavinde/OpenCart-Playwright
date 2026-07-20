import { Locator, Page } from "@playwright/test";

export class BasePage{

    protected page:Page;
    private readonly logoutLocator: Locator ;
    private readonly myAccountBtn : Locator ;
    private readonly continueBtn: Locator ;

    constructor(page: Page){
        this.page = page;
        this.myAccountBtn = page.locator("div[class='nav float-end'] div[class='dropdown']");
        this.logoutLocator = page.locator('#top').getByRole('link', { name: 'Logout' });
        this.continueBtn = page.getByRole('link', { name: 'Continue' })
    }

    async clickLogout(){
       await this.myAccountBtn.click();
       await this.logoutLocator.click();
       await this.continueBtn.waitFor({ state: 'visible' });
       await this.continueBtn.click();
    }

}