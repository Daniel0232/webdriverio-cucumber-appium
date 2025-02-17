const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PetStore extends Page {
    /**
     * define selectors using getter methods
     */
    get singInButton() {
        return $('a[href*="signonForm="]'); // Selector that looks for any 'href' which contains 'signonForm='
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async goSingIn() {

        if (await this.singInButton.isExisting()) {
            await this.singInButton.click();
        } else{
            console.log("The user is already logged");
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('https://petstore.octoperf.com/actions/Catalog.action');
    }
}

module.exports = new PetStore();
