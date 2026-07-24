import{Locator, Page} from '@playwright/test'
import { BasePage } from './BasePage';


export class LoginPage extends BasePage{

    private readonly emailTextBoxLocator : Locator;
    private readonly passwordTextBoxLocator : Locator ;
    private readonly loginButtonLocator : Locator ;
    private readonly errorMessageLocator: Locator;
    private readonly newCustomerContinueButton: Locator;
    private readonly accountSidebarRegisterLinkLocator: Locator;

    constructor(page: Page){
        
        super(page);
        this.emailTextBoxLocator= page.getByRole('textbox',{name: 'E-Mail Address'});
        this.passwordTextBoxLocator = page.getByRole('textbox', {name: 'Password'});
        this.loginButtonLocator = page.getByRole('button', {name: 'Login'})
        this.errorMessageLocator = page.getByText('Warning: No match for E-Mail Address and/or Password.', { exact: true });
        this.newCustomerContinueButton = page.getByRole('link', {name: 'Continue'});
        this.accountSidebarRegisterLinkLocator = page.locator('#column-right').getByRole('link', { name: 'Register', exact: true });


    }


    async setLoginEmailAddress(emailAddress:string) : Promise<void>{

        await this.emailTextBoxLocator.fill(emailAddress);

    }

    async setLoginPassword(password: string): Promise<void>{

        await this.passwordTextBoxLocator.fill(password);
    }

    async clickLoginButton(): Promise<void>{

        await this.loginButtonLocator.click();
    }

     getErrorMessage(): Locator{

        return  this.errorMessageLocator;
    }


    async enterLoginDetails(email: string , password:string): Promise <void>{

        await this.setLoginEmailAddress(email);
        await this.setLoginPassword(password);
        await this.clickLoginButton();
        
    }

    async clickNewCustomerContinueButton(): Promise<void>{

        await this.newCustomerContinueButton.click();
    }

     async clickSidebarRegisterLink():Promise<void>{

        await this.accountSidebarRegisterLinkLocator.click();
    
    }


}