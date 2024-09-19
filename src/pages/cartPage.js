const { expect } = require('@playwright/test')

exports.CartPage = class CartPage {
    constructor(page) {
      this.page = page;

      this.cartItem = 'inventory-item'
      this.itemName = 'inventory-item-name'
      this.removeBtn = '(//button[@class="btn btn_secondary btn_small cart_button"])'
    }
    
    async clickRemoveBtn(){
        await this.page.locator(this.removeBtn).click()
    }

    async assertItemIsNotInTheCart(){
        await expect(this.page.getByTestId(this.cartItem)).not.toBeVisible()
    }

    async assertItemIsVisible(){
        await expect(this.page.getByTestId(this.cartItem)).toBeVisible()
    }

    async asserItemName(name){
        await expect(this.page.getByTestId(this.itemName)).toHaveText(name)
    }
}