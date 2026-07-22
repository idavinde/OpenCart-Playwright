import {test, Page } from "@playwright/test";
import {HeaderComponent} from "../component/HeaderComponent"
import { HomePage } from "../pages/HomePage";
import { MyAccountPage } from "../pages/MyAccountPage";

test("test ", async({page})=>{

    await page.goto("");
   const homepage=  new HomePage(page);

   const loginPage = await homepage.clickLoginLink();
    await loginPage.setLoginEmailAddress('z@gmail.com');
    await loginPage.setLoginPassword('123456789');
    await loginPage.clickLoginButton();

    const myAccountPage = new MyAccountPage(page);
    await myAccountPage.selectDownloads();





})