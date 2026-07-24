import { Locator, Page } from "@playwright/test"

export type Currency = 'EUR' | 'GBP' | 'USD';

export class HeaderComponent{

  
  private readonly currencyLocator :Locator ;
  private readonly myAccountDropdownLocator: Locator ;

  private readonly registrationLinkLocator: Locator;
  private readonly loginLinkLocator: Locator;

  private readonly myAccountLinkLocator :Locator
  private readonly orderHistoryLinkLocator : Locator;
  private readonly transactionLinkLocator : Locator;
  private readonly downloadsLinkLocator : Locator;
  private readonly logoutLinkLocator : Locator;

  private readonly wishListLocator: Locator;
  private readonly shoppingCartLocator : Locator;
  private readonly checkoutLocator : Locator;
  private readonly myAccountMenuLocator: Locator;
  private readonly euroLocator: Locator;
  private readonly poundLocator: Locator;
  private readonly  usDollarLocator: Locator;
  

  constructor(page:Page){
    
    const topHeader = page.locator("#top");
    // currency
    const currencyDropdown = topHeader.locator('#form-currency .dropdown');
    this.currencyLocator = currencyDropdown.locator('a.dropdown-toggle');
    this.euroLocator = currencyDropdown.locator('a[href="EUR"]');
    this.poundLocator = currencyDropdown.locator('a[href="GBP"]');
    this.usDollarLocator = currencyDropdown.locator('a[href="USD"]');

    const accountDropdown = topHeader.locator('.nav.float-end .dropdown');
    this.myAccountDropdownLocator = accountDropdown.locator('a.dropdown-toggle');

    this.myAccountMenuLocator = accountDropdown.locator('ul.dropdown-menu');

    this.wishListLocator = topHeader.getByRole('link', {name: /Wish List/});
    this.shoppingCartLocator = topHeader.getByRole('link', { name: 'Shopping Cart',exact: true, });
    this.checkoutLocator = topHeader.getByRole('link', { name: 'Checkout', exact: true, });

    this.registrationLinkLocator =  this.myAccountMenuLocator.getByRole('link', {  name: 'Register', exact: true, })
    this.loginLinkLocator = this.myAccountMenuLocator.getByRole('link', { name: 'Login',exact: true, });

    this.myAccountLinkLocator = this.myAccountMenuLocator.getByRole('link', { name: 'My Account' });
    this.orderHistoryLinkLocator = this.myAccountMenuLocator.getByRole('link', { name: 'Order History' });
    this.transactionLinkLocator = this.myAccountMenuLocator.getByRole('link', { name: 'Transactions' });
    this.downloadsLinkLocator = this.myAccountMenuLocator.getByRole('link', { name: 'Downloads' });
    this.logoutLinkLocator = this.myAccountMenuLocator.getByRole('link', { name: 'Logout' });


  }


  async clickMyAccountDropDown(): Promise<void>{

    if (!(await this.myAccountMenuLocator.isVisible())) {
    await this.myAccountDropdownLocator.click();
    }
  }

  async clickWishList(): Promise<void>{

    await this.wishListLocator.click();
    

  }

  async clickShoppingCart(): Promise<void>{

    await this.shoppingCartLocator.click();

  }

  async clickCheckout(): Promise<void>{

    await this.checkoutLocator.click();

  }

  async goToRegistration(): Promise<void>{
    
    await this.clickMyAccountDropDown();
    await this.registrationLinkLocator.click();
    

  }

   async goToLogin(): Promise<void>{

    await this.clickMyAccountDropDown();
    await this.loginLinkLocator.click();
    

  }

  async goToMyAccount():Promise<void> {

    await this.clickMyAccountDropDown();
    await this.myAccountLinkLocator.click();
  }

  async goToOrderHistory(): Promise<void>{

    await this.clickMyAccountDropDown();
    await this.orderHistoryLinkLocator.click();
    
  }


  async goToTransactions(): Promise<void>{

    await this.clickMyAccountDropDown();
    await this.transactionLinkLocator.click();
   
  }


  async goToDownloads(): Promise<void>{

    await this.clickMyAccountDropDown();
    await this.downloadsLinkLocator.click();

  }

  async logout(): Promise<void>{

    await this.clickMyAccountDropDown();
    await this.logoutLinkLocator.click();
  }

async selectCurrency(currency: Currency): Promise<void> {
  await this.currencyLocator.click();

  const currencyOptions: Record<Currency, Locator> = {
    EUR: this.euroLocator,
    GBP: this.poundLocator,
    USD: this.usDollarLocator,
  };

  await currencyOptions[currency].click();
}





}