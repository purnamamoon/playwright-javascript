const { expect } = require('@playwright/test')

exports.InventoryPage = class InventoryPage {
    constructor(page) {
      this.page = page;
  
      this.burgerMenu = '(//div[@class="bm-burger-button"])'
      this.addToCartBtn = 'add-to-cart-sauce-labs-backpack'
      this.cartBadge = 'shopping-cart-badge'
      this.cartBtn = 'shopping-cart-link'
      this.itemName = '(//div[@class="inventory_item_name "])[1]'
    }
    
    async clickBurgerMenu(){
        await this.page.locator(this.burgerMenu).click()
    }

    async clickAddToCartBtn(){
        await this.page.getByTestId(this.addToCartBtn).click()
    }

    async clickCartBtn(){
        await this.page.getByTestId(this.cartBtn).click()
    }

    async getItemName(){
        const name = await this.page.locator(this.itemName).textContent()

        return name
    }

    async assertCartBadgeIsVisible(){
        await expect(this.page.getByTestId(this.cartBadge)).toBeVisible()
    }
  }