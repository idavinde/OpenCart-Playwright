import { Locator, Page, expect} from '@playwright/test'
import { BasePage } from './BasePage';


export class MyAccountPage extends BasePage{

    
    private readonly myAccountHeadingLocator : Locator;
    private readonly myAccountPageValidationLocator : Locator;

    private readonly newsLetterLinkLocator: Locator;

    constructor(page:Page){
       
        super(page);
        this.myAccountHeadingLocator = page.getByRole('link', { name: 'Edit Account' });
      this.myAccountPageValidationLocator =    page.locator('h2:has-text("My Account")');
      this.newsLetterLinkLocator = page.locator('#content').getByRole('link', {name: 'Subscribe / unsubscribe to newsletter',exact: true});

    }

    async validateMyAccountpage(): Promise<string>{

        return await this.myAccountPageValidationLocator.innerText();
    }

    async checkVisibility(){

    await expect(this.myAccountHeadingLocator).toBeVisible();

    }

    async clickNewsLetterLink():Promise<void>{

        await this.newsLetterLinkLocator.click();
    }

    
}