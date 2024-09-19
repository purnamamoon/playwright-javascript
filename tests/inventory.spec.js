const { test, expect } = require('../src/fixtures/basePage');

test.describe('Positive Test Case', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce')
  })
  
  test('Verify that the user successfully added the item to the cart', async ({ page, loginPage, inventoryPage, cartPage }) => {
    await inventoryPage.clickAddToCartBtn()
    const name = await inventoryPage.getItemName()
    await inventoryPage.assertCartBadgeIsVisible()
    await inventoryPage.clickCartBtn()
    await expect(page).toHaveURL(/.*cart/)
    await cartPage.assertItemIsVisible()
    await cartPage.asserItemName(name)
  });
  
  test('Verify that the user successfully removed the item from the cart', async ({ page, loginPage, inventoryPage, cartPage }) => {
    await inventoryPage.clickAddToCartBtn()
    await inventoryPage.clickCartBtn()
    await cartPage.clickRemoveBtn()
    await cartPage.assertItemIsNotInTheCart()
  });
})


