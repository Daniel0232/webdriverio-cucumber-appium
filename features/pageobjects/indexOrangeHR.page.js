const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class indexOrangeHRPage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('.oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module');
    }
}

module.exports = new indexOrangeHRPage();
