const { test, expect } = require('../src/fixtures/basePage');

test('Verify that the user successfully logged in', async ({ page, loginPage }) => {
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce')
  await expect(page).toHaveURL(/.*inventory/)
});
