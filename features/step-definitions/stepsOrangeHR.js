const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginOrangeHRPage = require('../pageobjects/loginOrangeHR.page');
const indexOrangeHRPage = require('../pageobjects/indexOrangeHR.page');

const pages = {
    login: LoginOrangeHRPage
}

Then(/^I should see a error message saying (.*)$/, async (message) => {
    await expect(indexOrangeHRPage.errorMessage).toBeExisting();
    await expect(indexOrangeHRPage.errorMessage).toHaveText(expect.stringContaining(message));
});

