import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { LoginPage } from '../pages/LoginPage'
import {faker } from '@faker-js/faker'
import { MyAccountPage } from '../pages/MyAccountPage';
import { ENV } from '../config/environment';
import { createLoginTests } from '../utility/createLoginTests';
import { DataProvider } from '../dataProvider/DataProvider';
import { LoginData } from '../types/LoginData';
let homePage : HomePage;
let registrationPage : RegistrationPage;
let loginPage :LoginPage;
let accountPage : MyAccountPage;



test.describe("Login Scenario", ()=>{

createLoginTests( "JSON", DataProvider.readJSONFile<LoginData>("data/loginData.json"));

})


