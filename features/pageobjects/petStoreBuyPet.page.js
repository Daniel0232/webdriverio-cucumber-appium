const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PetStoreBuyPet extends Page {
    /**
     * define selectors using getter methods
     */

    getCategoryButton(category) {
        return $(`a[href*="${category.toUpperCase()}"]`); // Selector dinámico basado en la categoría
    }

    addToCartButton(petName) {
        return $(`//tr[td[normalize-space()="${petName}"]]//a[contains(@href,"addItemToCart")]`);
    }    

    quantityInput(petName){
        return $(`//td[normalize-space()="${petName}"]/following-sibling::td/input`);
    }

    get proceedCheckoutButton(){
        return $(`//a[contains(@href,"newOrderForm")]`);
    }

    get continueCheckoutButton(){
        return $('input[name="newOrder"]');
    }

    get confirmCheckoutButton(){
        return $(`//a[contains(@href,"newOrder")]`);
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * Click on a category button
     */
    async selectCategory(category) {
        const categoryButton = this.getCategoryButton(category);
        await categoryButton.click();
    }

    /**
     * Method to choose a pet after selecting a category
     */
    async choosePet(petName) {
        petName = petName.match(/^\w+\s+(\w+)/)?.[1]; // this will choose only the second word from a string for example "large angelfish", only choosing the second word
        const petSelector = $(`//td[text()="${petName}"]/preceding-sibling::td/a`); // Reemplaza espacios por '+' si es necesario en la URL
        await petSelector.click();
    }

    /**
     * Add the selected pet to the cart
     */
    async addPetToCart(petName) {
        await this.addToCartButton(petName).click();
    }

    /**
     * Method to complete proceed and complete the checkout
     */
    async checkout(quantity, petName)
    {
        const quantityInput = this.quantityInput(petName);
        await quantityInput.setValue(quantity);
        await this.proceedCheckoutButton.click();
        await this.continueCheckoutButton.click();
        await this.confirmCheckoutButton.click();
    }
}

module.exports = new PetStoreBuyPet();