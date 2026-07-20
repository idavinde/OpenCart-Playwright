import{expect,Locator, Page} from '@playwright/test'
import { MyAccountPage } from './MyAccountPage';

export class LoginPage{

    private readonly emailTextBoxLocator : Locator;
    private readonly passwordTextBoxLocator : Locator ;
    private readonly loginButtonLocator : Locator ;
    private readonly errorMessageLocator: Locator

    constructor(page: Page){

        this.emailTextBoxLocator= page.getByRole('textbox',{name: 'E-Mail Address'});
        this.passwordTextBoxLocator = page.getByRole('textbox', {name: 'Password'});
        this.loginButtonLocator = page.getByRole('button', {name: 'Login'})
        this.errorMessageLocator = page.getByText('Warning: No match for E-Mail Address and/or Password.', { exact: true });

    }


    async setLoginEmailAddress(emailAddress:string) : Promise<this>{

        await this.emailTextBoxLocator.fill(emailAddress);
        return this;

    }

    async setLoginPassword(password: string): Promise<this>{

        await this.passwordTextBoxLocator.fill(password);
        return this;
    }

    async clickLoginButton(): Promise<this>{

        await this.loginButtonLocator.click();
        return this;
    }

     getErrorMessage(): Locator{

        return  this.errorMessageLocator;
    }


    async enterLoginDetails(email: string , password:string): Promise <void>{

        await this.setLoginEmailAddress(email);
        await this.setLoginPassword(password);
        await this.clickLoginButton();
        
        
    }
}