import {Page} from '@playwright/test'
import { BasePage } from './BasePage';

export class OrdersPage extends BasePage{

    constructor(page: Page){

        super(page);
    }
}