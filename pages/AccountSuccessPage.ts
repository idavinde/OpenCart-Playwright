import { Page , Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { MyAccountPage } from "./MyAccountPage";

export class AccountSuccessPage extends BasePage{

    private readonly continueButtonLocator: Locator ;
    private readonly successHeadingLocator: Locator ; 

    constructor(page:Page){
        
        super(page);
        this.continueButtonLocator = page.getByRole('link', {name:'Continue'});
        this.successHeadingLocator= page.locator('h1:has-text("Your Account Has Been Created!")')

    }

    async clickContinueButton(): Promise<MyAccountPage>{

        await this.continueButtonLocator.click();
        return new MyAccountPage(this.page);
    }

    async getSuccessMessageText(): Promise<string>{

        return await this.successHeadingLocator.innerText(); ;
    }
    
} 