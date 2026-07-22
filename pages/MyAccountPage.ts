import { Locator, Page, expect} from '@playwright/test'
import { BasePage } from './BasePage';
import { OrdersPage } from './OrdersPage';
import { TransactionsPage } from './TransactionsPage';
import { DownloadsPage } from './DownloadsPage';

export class MyAccountPage extends BasePage{

    
    private readonly myAccountHeadingLocator : Locator;

    constructor(page:Page){
       
        super(page);
        this.myAccountHeadingLocator = page.getByRole('link', { name: 'Edit Account' })
    }

    async checkVisibility(){

    await expect(this.myAccountHeadingLocator).toBeVisible();

    }

    async selectOrderHistory():Promise <OrdersPage>{

        await this.header.clickOrderHistoryLink();
        return new OrdersPage(this.page);
    }

    async selectTransactions(): Promise<TransactionsPage>{

        await this.header.clickTransactionsLink();
        return new TransactionsPage(this.page);
    }

    async selectDownloads(): Promise <DownloadsPage>{

        await this.header.clickDownloadsLink();
        return new DownloadsPage(this.page);
    }

    
}