const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class nopCommerceLogin extends Page {
    /**
     * define selectors using getter methods
     */
    get adminbutton(){
        return $('.admin-button')
    }

    get inputUsername () {
        return $('#Email');
    }

    get inputPassword () {
        return $('#Password');
    }

    get btnSubmit () {
        return $('.login-button');
    }

    get errorMessage(){
        return $('.field-validation-error')
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

    async goToLogin(){
        await this.adminbutton.click();
    }

    async errorMessage(){
        return this.errorMessage;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('https://www.nopcommerce.com/en/demo');
    }
}

module.exports = new nopCommerceLogin();
