const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginOrangeHRPage = require('../pageobjects/loginOrangeHR.page');
const indexOrangeHRPage = require('../pageobjects/indexOrangeHR.page');

const pages = {
    login: LoginOrangeHRPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (page, username, password) => {
    await LoginOrangeHRPage.login(username, password)
    await pages[page].type()
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

