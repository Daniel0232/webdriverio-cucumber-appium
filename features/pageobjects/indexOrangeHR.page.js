const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class indexOrangeHRPage extends Page {
    /**
     * define selectors using getter methods
     */
    get errorMessage () {
        return $('.oxd-alert.oxd-alert--error');
    }
}

module.exports = new indexOrangeHRPage();
