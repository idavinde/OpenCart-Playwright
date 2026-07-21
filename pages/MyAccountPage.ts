import { Locator, Page, expect} from '@playwright/test'
import { BasePage } from './BasePage';

export class MyAccountPage extends BasePage{

    
    private readonly myAccountHeadingLocator : Locator;

    constructor(page:Page){
        super(page);
        this.page=page;
        this.myAccountHeadingLocator = page.getByRole('link', { name: 'Edit Account' })
    }

    async checkVisibility(){

    await expect(this.myAccountHeadingLocator).toBeVisible();

    }

    
}