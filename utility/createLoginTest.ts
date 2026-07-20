import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginData } from '../types/LoginData';
import { MyAccountPage } from '../pages/MyAccountPage';
import { ENV } from '../config/environment';

export function createLoginTests(
  source: string,
  data: LoginData[]
): void {
  for (const loginData of data) {
    test(`${source} Login - ${loginData.testCase}`, async ({ page }) => {
      await page.goto("");

      const homePage = new HomePage(page);
      const loginPage = await homePage.goToLogin();

      const isValidUser = String(loginData.isValidUser).toLowerCase() === 'true';

      const password = isValidUser? ENV.password : String(loginData.password ?? '');

      await loginPage.enterLoginDetails(String(loginData.email ?? ''),password );

      if (isValidUser) {
        const myAccountPage = new MyAccountPage(page);

        await myAccountPage.checkVisibility();
        await myAccountPage.clickLogout();
      } else {
        if (!loginData.expectedMessage) {
          throw new Error( `Expected message is missing for ${loginData.testCase}`);
        }

        await expect(loginPage.getErrorMessage()).toContainText(loginData.expectedMessage);
      }
    });
  }
}