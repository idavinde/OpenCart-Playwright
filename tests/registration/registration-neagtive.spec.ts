import { ENV } from '../../config/environment';
import {test, expect} from '../../fixtures/pageFixtures'
import { FakerDataGeneratorUtil } from '../../utility/FakerDataGenerator';

test.describe('Registration - Neagtive scenario',()=>{

    test.beforeEach('',async({page, homePage})=>{
        await page.goto("");
       await homePage.header.goToRegistration();
    })

    test('TC_RF-009 - Validate Registering an Account by providing the existing email address',async({page, registrationPage})=>{
        
        const registrationData = {...FakerDataGeneratorUtil.getUserData(), email: ENV.existUserEmail };

        await registrationPage.completeRegistration(registrationData);
        
        await expect(await registrationPage.getExistUserEmailError()).toHaveText("Warning: E-Mail Address is already registered!");

    })

})