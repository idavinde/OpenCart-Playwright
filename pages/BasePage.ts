import { Locator, Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { HeaderComponent } from "../component/HeaderComponent";

export class BasePage{

    protected readonly page:Page;
    readonly header : HeaderComponent;

    constructor(page: Page){
        this.page = page;
        this.header = new HeaderComponent(page);  
    }

    

}