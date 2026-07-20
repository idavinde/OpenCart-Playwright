
import { faker } from "@faker-js/faker";
import { HomePage } from "../pages/HomePage";
import { expect, test } from "@playwright/test";
import { FakerDataGeneratorUtil } from "../utility/FakerDataGenerator";
import { CustomerQuery } from "../database/CustomerQuery";


test('Verify ', async ({ page }) => {
   
   page.goto("");
   const homePage= new HomePage(page);
   const RegistrationPage = await homePage.goToRegistrationPage();
const userData = FakerDataGeneratorUtil.getUserData();
await RegistrationPage.completeRegistration(userData);

const result = await CustomerQuery.getCustomerByEmail(userData.email);

 expect(result.length).toBe(1);
 expect(result[0].firstname).toBe(userData.firstName);
 expect(result[0].lastname).toBe(userData.lastName);
 expect(result[0].email).toBe(userData.email);


});