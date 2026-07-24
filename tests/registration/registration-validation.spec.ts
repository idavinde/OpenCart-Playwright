import { test ,expect} from "../../fixtures/pageFixtures";


test.describe('Registration - validation scenario',()=>{
  
   test.beforeEach('setup', async ({ page , homePage }) =>{
  
         await page.goto("");
         await homePage.header.goToRegistration();
  
      })

   test('TC_RF-004 - Display validation messages when submitting an empty registration form', async ({ page , registrationPage}) => {
   
    await registrationPage.submitRegistrationForm();

    await expect( registrationPage.getFirstNameError()).toHaveText('First Name must be between 1 and 32 characters!');
    await expect( registrationPage.getLastNameError()).toHaveText('Last Name must be between 1 and 32 characters!');
    await expect( registrationPage.getEmailError()).toHaveText('E-Mail Address does not appear to be valid!');
    await expect( registrationPage.getPasswordError()).toHaveText('Password must be between 4 and 20 characters!');
    await expect( registrationPage.getPrivacyPolicyError()).toHaveText(' Warning: You must agree to the Privacy Policy! ');

});

 

})

