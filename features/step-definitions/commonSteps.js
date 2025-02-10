const { Given, When, Then } = require('@cucumber/cucumber');
const { browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
const LoginOrangeHRPage = require('../pageobjects/loginOrangeHR.page');

Given(/^I am on the "(.*)" page$/, async (page) => {
    if (page === 'login')  await LoginPage.open();
    if (page === 'orangehrm login') await LoginOrangeHRPage.open();
});

When(/^I enter (.*) and (.*) on "(.*)" page$/, async (username, password, page) => {
    if (page === 'login') await LoginPage.login(username, password);
    if (page === 'orangehrm login') 
        await LoginOrangeHRPage.login(username, password);
});

Then(/^I should see the "(.*)" page (.*)$/, async (page, url) => {
    const currentUrl = await browser.getUrl();
    if (page === 'dashboard')  await expect(currentUrl).toBe(url)
});
