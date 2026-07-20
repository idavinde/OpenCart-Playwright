import{Page, Locator, expect } from '@playwright/test'
import { UserData } from '../types/UserData';


export class RegistrationPage{

    private readonly page : Page;
    private readonly firstNameTextBoxLocator : Locator ;
    private readonly lastNameTextBoxLocator : Locator ; 
    private readonly emailTextBoxLocator : Locator ;
    private readonly passwordTextBoxLocator : Locator ;
    private readonly subscribeBtnLocator :Locator ;
    private readonly privatePolicyBtnLocator : Locator;
    private readonly continueBtnLocator :Locator;
    private readonly sucessHeadingLocator : Locator;



    constructor(page:Page){
        this.page=page;
        this.firstNameTextBoxLocator = page.getByRole('textbox', {name:'First Name'});
        this.lastNameTextBoxLocator = page.getByRole('textbox', {name:'Last Name'});
        this.emailTextBoxLocator = page.getByRole('textbox',{name:'E-mail'});
        this.passwordTextBoxLocator = page.getByRole('textbox', {name:'Password'});
        this.subscribeBtnLocator = page.locator('#input-newsletter');
        this.privatePolicyBtnLocator = page.locator('.text-end input[type="checkbox"]');
        this.continueBtnLocator = page.getByRole('button', {name:'Continue'});
        this.sucessHeadingLocator= page.locator('h1:has-text("Your Account Has Been Created!")')

    }

    async setFirstName(firstName: string): Promise<void>{

        await this.firstNameTextBoxLocator.fill(firstName);
    }

    async setLastName(lastName: string): Promise<void> {

        await this.lastNameTextBoxLocator.fill(lastName);
    }

    async setEmail(email: string): Promise<void>{

       await this.emailTextBoxLocator.fill(email);

    }

    async setPassword(password: string): Promise<void>{

        await this.passwordTextBoxLocator.fill(password);
    }

    async setSubsciber(){

        await this.subscribeBtnLocator.click();

    }

    async setPrivatePolicy(){

        await this.privatePolicyBtnLocator.click();
    }

    async clickContinueButton(){

        await this.continueBtnLocator.click();
    }

    async getConfirmationMsg(): Promise<string>{

        return await this.sucessHeadingLocator.textContent() ?? '';
    }


    async completeRegistration(userData: UserData): Promise<void>{

        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setPassword(userData.password);
        await this.setSubsciber();
        await this.setPrivatePolicy();
        await this.clickContinueButton();
        await expect(this.sucessHeadingLocator).toBeVisible() ;
    }





}