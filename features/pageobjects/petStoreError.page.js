const { $ } = require('@wdio/globals');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class petStoreError extends Page {
    /**
     * define selectors using getter methods
     */
    get errorMessage () {
        return $('h1');
    }
}

module.exports = new petStoreError();
