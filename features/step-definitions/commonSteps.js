const { Given, When, Then } = require('@cucumber/cucumber');
const { browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
const LoginOrangeHRPage = require('../pageobjects/loginOrangeHR.page');
const MainOrangeHRPage = require('../pageobjects/mainOrangeHR.page');
const LoginNopCommerce = require('../pageobjects/petStore.page');
/**
 * I have included all the common steps which are repeated in most logins tests, being filtered by a key word in the gherking in order to select the correct pageObject
 */

const pages = {
    "login": LoginPage,
    "orangehrm login": LoginOrangeHRPage,
    "orangehrm main": MainOrangeHRPage,
    "nopcommerce login": LoginNopCommerce
};

Given(/^I am on the "(.*)" page$/, async (pageName) => {
    const pageObject = pages[pageName.toLowerCase()];

    if (!pageObject) {
        throw new Error(`❌ No se encontró un Page Object para "${pageName}"`);
    }

    try {
        await pageObject.open();
        console.log(`✅ Navegando a la página: ${pageName}`);
    } catch (error) {
        console.error(`❌ Error al abrir la página "${pageName}":`, error);
        throw error;
    }
});

When(/^I enter (.*) and (.*) on "(.*)" page$/, async (username, password, pageName) => {
    const pageObject = pages[pageName.toLowerCase()];
    try {
        console.log(pageObject);
        await pageObject.login(username,password);
        console.log(`✅ Login completado con éxito: ${pageName}`);
    } catch (error) {
        console.error(`❌ Login no completado "${pageName}":`, error);
        throw error;
    }
});

Then(/^I should see the dashboard page (.*)$/, async (url) => {
    try {
        await expect(browser).toHaveUrl(url)
        console.log(`✅ Vemos el dashboard`);
    } catch (error) {
        console.error(`❌ Ha habido un error al ir al dashboard: `, error);
        throw error;
    }
});

Then(/^I should see a error message saying (.*) from "(.*)" page$/, async (message, pageName) => {
    const pageObject = pages[pageName.toLowerCase()];
    try {
        await expect(pageObject.errorMessage).toBeExisting();
        await expect(pageObject.errorMessage).toHaveText(expect.stringContaining(message));
        console.log(`✅ El error "${message}" es correcto`);
    } catch (error) {
        console.log(`❌ No se ve el error "${message}"`);
    }
});


