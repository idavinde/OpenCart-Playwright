import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage'
import { MyAccountPage } from '../../pages/MyAccountPage';
import { LoginData } from '../../types/LoginData';
import { DataProvider } from '../../dataProvider/DataProvider';
import { createLoginTests } from '../../utility/createLoginTest';

let homePage : HomePage;
let loginPage :LoginPage;
let AccountPage : MyAccountPage;





test.describe("Login Tests", () => {

    createLoginTests(
        "JSON",
        DataProvider.readJSONFile<LoginData>("data/loginData.json")
    );

    createLoginTests(
        "CSV",
        DataProvider.readCSVFile<LoginData>("data/loginData.csv")
    );

    createLoginTests(
        "XLSX",
        DataProvider.readXLSXFile<LoginData>("data/loginData.xlsx")
    );

});


