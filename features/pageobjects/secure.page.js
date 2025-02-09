const { $, browser } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        browser.debug();
        return $('#flash');
    }
}

module.exports = new SecurePage();
