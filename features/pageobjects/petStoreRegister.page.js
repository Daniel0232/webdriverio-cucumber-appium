const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PetStoreRegister extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input[name="username"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get inputRepeatPassword () {
        return $('input[name="repeatedPassword"]');
    }

    get inputFirstName () {
        return $('input[name="account.firstName"]');
    }

    get inputLastName () {
        return $('input[name="account.lastName"]');
    }

    get inputAccountEmail () {
        return $('input[name="account.email"]');
    }

    get inputPhone(){
        return $('input[name="account.phone"]');
    }

    get inputPhone(){
        return $('input[name="account.phone"]');
    }

    get inputAddress1(){
        return $('input[name="account.address1"]');
    }

    get inputAddress2(){
        return $('input[name="account.address2"]');
    }

    get inputCity(){
        return $('input[name="account.city"]');
    }

    get inputState(){
        return $('input[name="account.state"]');
    }

    get inputZip(){
        return $('input[name="account.zip"]');
    }

    get inputCountry(){
        return $('input[name="account.country"]');
    }

    get selectLanguajePreference(){
        return $('input[name="account.languagePreference"]');
    }

    get selectLanguajePreference(){
        return $('input[name="account.favouriteCategoryId"]');
    }

    get checkboxEnableMyList(){
        return $('input[name="account.listOption"]');
    }

    get checkboxEnableMyBanner(){
        return $('input[name="account.listOption"]');
    }

    get btnSubmit(){
        return $('input[name="newAccount"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async register (username, password, firstName, lastName, email, phone, address1, address2, city, state, zip, country) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputRepeatPassword.setValue(password);
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputAccountEmail.setValue(email);
        await this.inputPhone.setValue(phone);
        await this.inputAddress1.setValue(address1);
        await this.inputAddress2.setValue(address2);
        await this.inputCity.setValue(city);
        await this.inputState.setValue(state);
        await this.inputZip.setValue(zip);
        await this.inputCountry.setValue(country);
        await this.btnSubmit.click();
    }
}

module.exports = new PetStoreRegister();
