import { test, expect } from '@playwright/test';
import { LoginData } from '../../types/LoginData';
import { DataProvider } from '../../dataProvider/DataProvider';
import { createLoginTests } from '../../utility/createLoginTests';


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


