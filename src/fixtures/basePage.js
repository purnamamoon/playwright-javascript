const { LoginPage } = require('../pages/loginPage');
const base = require('@playwright/test');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use) =>{
        await use(new CartPage(page));
    }
})

exports.expect = base.expect;