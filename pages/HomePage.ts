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
        
    try{
        await this.loginLink.click();
        }

     catch(error){
            console.log(`Exception occurred while clicking 'Login': ${error}`);
            throw error;
        }
    }

    async clickRegistrationLink(): Promise<void>{

        try{

        await this.registrationLink.click();

        }
        catch(error){
            console.log(`Exception occurred while clicking 'Register': ${error}`);
            throw error;
        }
    }

    async clickMyAccountButton(): Promise<void>{
        
        try{

        await this.myAccountBtn.click();

        }
        catch(error){
            console.log(`Exception occurred while clicking 'My Account': ${error}`);
            throw error;
        }
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