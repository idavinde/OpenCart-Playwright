import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { LoginPage } from '../pages/LoginPage'
import {faker } from '@faker-js/faker'
import { MyAccountPage } from '../pages/MyAccountPage';
import { ENV } from '../config/environment';
import { createLoginTests } from '../utility/createLoginTest';
import { DataProvider } from '../dataProvider/DataProvider';
import { LoginData } from '../types/LoginData';
let homePage : HomePage;
let registrationPage : RegistrationPage;
let loginPage :LoginPage;
let AccountPage : MyAccountPage;

/*test.beforeEach('setup',async({page})=>{
  //page=page
  await page.goto('');
  homePage= new HomePage(page);

})

test('Verify FUll Registration', async ({ page }) => {
  
registrationPage = await homePage.goToRegistrationPage();

await registrationPage.completeRegistration({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
})
});*/


/*test.only('Validate login into the Application using valid credentials', async ({ page }) => {
  
 loginPage = await homePage.goToLogin();
  AccountPage = await loginPage.enterValidUserDetails(ENV.email,ENV.password);
  await AccountPage.checkVisibility();
  await AccountPage.clickLogout();

});*/

test.describe("Login Scenario", ()=>{

createLoginTests(
        "JSON",
        DataProvider.readJSONFile<LoginData>("data/loginData.json")
    );

})


/*test.afterEach('Close Pages', async ({page})=>{

  await page.close();

})*/

