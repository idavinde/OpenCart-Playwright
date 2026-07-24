import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountLogoutPage extends BasePage{
    
    constructor(page: Page){
        super(page);
        
    }
}