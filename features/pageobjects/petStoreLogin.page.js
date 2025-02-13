const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PetStoreLogin extends Page {
    /**
     * define selectors using getter methods
     */
    get registerButton () {
        return $('a[href*="newAccountForm="]'); // Selector that looks for any 'href' which contains 'newAccountForm='
    }    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async goRegister () {
        await this.registerButton.click();
    }
    
}

module.exports = new PetStoreLogin();
