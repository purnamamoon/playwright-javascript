const { test, expect } = require('../src/fixtures/basePage');

test('Verify that the user successfully added the item to the cart', async ({ page, loginPage, inventoryPage, cartPage }) => {
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce')
  await inventoryPage.clickAddToCartBtn()
  const name = await inventoryPage.getItemName()
  await inventoryPage.assertCartBadgeIsVisible()
  await inventoryPage.clickCartBtn()
  await expect(page).toHaveURL(/.*cart/)
  await cartPage.assertItemIsVisible()
  await cartPage.asserItemName(name)
});
