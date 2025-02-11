const { Given, When } = require('@cucumber/cucumber');
const LoginNopCommercePage = require('../pageobjects/nopCommerceLogin.page');

Given(/^I am on the index page$/, async () => {
    LoginNopCommercePage.open();
});

When(/^I enter on the login page$/, async() => {
    console.log('pasa');
    LoginNopCommercePage.goToLogin();
});

