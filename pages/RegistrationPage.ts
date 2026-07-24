import{Page, Locator, expect } from '@playwright/test'
import { UserData } from '../types/UserData';
import { BasePage } from './BasePage';



export class RegistrationPage extends BasePage{

    private readonly firstNameTextBoxLocator : Locator ;
    private readonly lastNameTextBoxLocator : Locator ; 
    private readonly emailTextBoxLocator : Locator ;
    private readonly passwordTextBoxLocator : Locator ;
    private readonly subscribeBtnLocator :Locator ;
    private readonly privacyPolicyCheckboxLocator : Locator;
    private readonly continueBtnLocator :Locator;
    private readonly verifyPageHeading: Locator ;

    //errors

    private readonly firstNameErrorLocator: Locator;
    private readonly lastNameErrorLocator : Locator;
    private readonly emailErrorLocator: Locator;
    private readonly passwordErrorLocator : Locator;
    private readonly privacyPolicyErrorLocator : Locator;
    private readonly existUserEmailErrorLocator : Locator;

    

    constructor(page:Page){
        
        super(page);

        this.firstNameTextBoxLocator = page.getByRole('textbox', {name:'First Name'});
        this.lastNameTextBoxLocator = page.getByRole('textbox', {name:'Last Name'});
        this.emailTextBoxLocator = page.getByRole('textbox',{name:'E-mail'});
        this.passwordTextBoxLocator = page.getByRole('textbox', {name:'Password'});
        this.subscribeBtnLocator = page.locator('#input-newsletter');
        this.privacyPolicyCheckboxLocator = page.locator('.text-end input[type="checkbox"]');
        this.continueBtnLocator = page.getByRole('button', {name:'Continue'});
        this.verifyPageHeading = page.locator('#content').getByRole('heading', {name: 'Register Account'});

        //error

        this.firstNameErrorLocator = page.locator('#error-firstname');
        this.lastNameErrorLocator = page.locator('#error-lastname');
        this.emailErrorLocator = page.locator('#error-email')
        this. passwordErrorLocator= page.locator('#error-password');
        this.privacyPolicyErrorLocator = page.locator('#alert .alert-danger');
        this.existUserEmailErrorLocator = page.locator('#alert .alert-danger');

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

    async selectSubsciber(accept: boolean): Promise<void>{

        await this.subscribeBtnLocator.setChecked(accept);

    }

    async acceptPrivatePolicy(accept:boolean): Promise<void>{

        await this.privacyPolicyCheckboxLocator.setChecked(accept);
    }

    async submitRegistrationForm(): Promise<void>{

        await this.continueBtnLocator.click();
    }



    async completeRegistration(userData: UserData , subscribeToNewsLetter :boolean = true): Promise<void>{

        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setPassword(userData.password);
        await this.selectSubsciber(subscribeToNewsLetter);
        await this.acceptPrivatePolicy(true);
        await this.submitRegistrationForm();

    }

    async fillRegistrationForm(userData: UserData): Promise<void>{

         await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setPassword(userData.password);

    }

   async verifyRegisterAccountHeading():Promise<string>{
        return await this.verifyPageHeading.innerText();
    }

     getFirstNameError(): Locator{

        return  this.firstNameErrorLocator ;
    }

     getLastNameError(): Locator{

        return  this.lastNameErrorLocator ;
    }

     getEmailError(): Locator{

        return  this.emailErrorLocator ;
    }

     getPasswordError(): Locator{

        return  this.passwordErrorLocator ;
    }

     getPrivacyPolicyError(): Locator{

        return  this.privacyPolicyErrorLocator ;
    }

    getExistUserEmailError(): Locator{
        
        return this.existUserEmailErrorLocator;
    }



}