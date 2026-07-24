import {test as base, Page} from '@playwright/test'
import { HomePage } from '../pages/HomePage' ;
import { LoginPage } from '../pages/LoginPage' ;
import { RegistrationPage } from '../pages/RegistrationPage' ;
import { AccountSuccessPage } from '../pages/AccountSuccessPage' ;
import { MyAccountPage } from '../pages/MyAccountPage' ;
import { NewsLetterSubscriptionPage } from '../pages/NewsLetterSubscriptionPage' ;



type PageFixtures = { 
    homePage: HomePage , 
    loginPage: LoginPage,
    registrationPage: RegistrationPage, 
    accountSuccessPage: AccountSuccessPage,
    myAccountPage: MyAccountPage,
    newsLetterSubscriptionPage: NewsLetterSubscriptionPage
};

export const test = base.extend<PageFixtures>({

    homePage : async({page}, use) =>{ await use(new HomePage(page));},
    loginPage : async({page},use) => {await use(new LoginPage(page))},
    registrationPage: async({page},use) => {await use(new RegistrationPage(page))},
    accountSuccessPage: async({page},use) => {await use(new AccountSuccessPage(page))},
    myAccountPage: async({page}, use)=>{await use(new MyAccountPage(page))},
    newsLetterSubscriptionPage: async({page}, use)=>{await use(new NewsLetterSubscriptionPage(page))}
})

export { expect } from '@playwright/test';

