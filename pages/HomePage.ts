import {Page, Locator} from '@playwright/test'
import { LoginPage } from './LoginPage';
import { RegistrationPage } from './RegistrationPage';
import { BasePage } from './BasePage';

export class HomePage extends BasePage{

    constructor(page:Page){
        super(page);
    }

   async  clickLoginLink(): Promise<LoginPage>{ 
        
        this.header.clickLoginLink();
        return new LoginPage(this.page);
    }

    async clickRegistrationLink(): Promise<RegistrationPage>{

        this.header.clickRegistrationLink();
        return new RegistrationPage(this.page);

    }

   



}