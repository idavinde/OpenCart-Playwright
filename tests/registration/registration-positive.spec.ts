

import { test ,expect} from "../../fixtures/pageFixtures";
import { FakerDataGeneratorUtil } from "../../utility/FakerDataGenerator";
import { CustomerQuery } from "../../database/CustomerQuery";



test.describe('Registration - Positive scenario',()=>{
  
   test.beforeEach('setup', async ({ page , homePage }) =>{

       await page.goto("");
       await homePage.header.goToRegistration();

    })


   test('TC_RF-003 Registering an Account by providing all the fields', async ({ page,registrationPage, accountSuccessPage, myAccountPage }) => {
   
    await registrationPage.completeRegistration(FakerDataGeneratorUtil.getUserData());

    await expect(await accountSuccessPage.getSuccessMessageText()).toBe('Your Account Has Been Created!');

    await accountSuccessPage.clickContinueButton();
   
    await expect(await myAccountPage.validateMyAccountpage()).toBe('My Account');


});


  test("TC_RF-005 Validate Registering an Account when Newsletter field is selected",async({page , registrationPage, accountSuccessPage, myAccountPage,newsLetterSubscriptionPage })=>{
      
      
      
     await registrationPage.completeRegistration(FakerDataGeneratorUtil.getUserData());
      
     await accountSuccessPage.clickContinueButton();

     await expect(await myAccountPage.validateMyAccountpage()).toBe('My Account');

     await myAccountPage.clickNewsLetterLink();
     
     await expect(await newsLetterSubscriptionPage.isNewsletterSubscriptionChecked()).toBe(true);


  })

   test("TC_RF-006 Validate Registering an Account when Newsletter field is not selected",async({page, registrationPage , accountSuccessPage , myAccountPage, newsLetterSubscriptionPage})=>{
      
      await registrationPage.completeRegistration(FakerDataGeneratorUtil.getUserData(),false);

      await accountSuccessPage.clickContinueButton();

      await expect(await myAccountPage.validateMyAccountpage()).toBe('My Account');

      await myAccountPage.clickNewsLetterLink();
      await expect(await newsLetterSubscriptionPage.isNewsletterSubscriptionChecked()).toBe(false);


  })

  

   test("TC_RF-007 Validate different ways of navigating to 'Register Account' page",async({page, registrationPage, loginPage})=>{
   
      await registrationPage.header.goToLogin();
      await loginPage.clickNewCustomerContinueButton();
      await expect(await registrationPage.verifyRegisterAccountHeading()).toBe("Register Account");

     
      await registrationPage.header.goToLogin();
      await loginPage.clickSidebarRegisterLink();

      await expect(await registrationPage.verifyRegisterAccountHeading()).toBe("Register Account");

  })



})

