const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginOrangeHRPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('button[name="username"]');
    }

    get inputPassword () {
        return $('button[name="username"]');
    }

    get btnSubmit () {
        return $('.oxd-button oxd-button--medium oxd-button--main orangehrm-login-button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('https://opensource-demo.orangehrmlive.com/');
    }
}

module.exports = new LoginOrangeHRPage();
