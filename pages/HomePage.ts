import {Page, Locator} from '@playwright/test'
import { LoginPage } from './LoginPage';
import { RegistrationPage } from './RegistrationPage';

export class HomePage{

    private page :Page ; 
    private readonly registrationLink:Locator  ;
    private readonly loginLink : Locator ;
    private readonly myAccountBtn : Locator ;

    constructor(page:Page){

        this.page= page;
        this.myAccountBtn = page.locator("div[class='nav float-end'] div[class='dropdown']");
        this.registrationLink = page.getByRole('link', {name: 'Register'});
        this.loginLink = page.getByRole('link', {name: 'Login'});


    }

   async  clickLoginLink(): Promise<void>{ 
        
        await this.loginLink.click();
    }

    async clickRegistrationLink(): Promise<void>{

        await this.registrationLink.click();

    }

    async clickMyAccountButton(): Promise<void>{
        
        await this.myAccountBtn.click();

    }

    async goToLogin(): Promise <LoginPage>{
       
        await this.clickMyAccountButton();
        await this.clickLoginLink();

        return new LoginPage(this.page);

    }

    async goToRegistrationPage(): Promise<RegistrationPage>{

        await this.clickMyAccountButton();
        await this.clickRegistrationLink();

        return new RegistrationPage(this.page);
    }



}