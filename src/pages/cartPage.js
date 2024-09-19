const { expect } = require('@playwright/test')

exports.CartPage = class CartPage {
    constructor(page) {
      this.page = page;

      this.cartItem = 'inventory-item'
      this.itemName = 'inventory-item-name'
    }
    
    async assertItemIsVisible(){
        await expect(this.page.getByTestId(this.cartItem)).toBeVisible()
    }

    async asserItemName(name){
        await expect(this.page.getByTestId(this.itemName)).toHaveText(name)
    }
}