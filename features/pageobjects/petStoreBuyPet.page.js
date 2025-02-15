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

    addToCartButton(petName){
        return $(`//td[normalize-space(text())="${petName}"]/preceding-sibling::td/a`);
    }

    quantityInput(petName){
        return $(`//td[text()="${petName}"]/preceding-sibling::td/input`);
    }

    get proceedCheckoutButton(){
        return $(`a[href="/actions/Order.action?newOrderForm="]`);
    }

    get continueCheckoutButton(){
        return $('input[name="newOrder"]');
    }

    get confirmCheckoutButton(){
        return $(`a[href="/actions/Order.action?newOrder=&confirmed=true"]`);
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
        console.log(petName+"************************************************");
        const petSelector = $(`//td[text()="${petName}"]/preceding-sibling::td/a`); // Reemplaza espacios por '+' si es necesario en la URL
        await petSelector.click();
    }

    /**
     * Add the selected pet to the cart
     */
    async addPetToCart(petName) {
        //const addToCartButton = $('button[name="addToCart"]'); // Ajusta el selector si es diferente
        console.log(petName+"**********************");
        await this.addToCartButton(petName).click();
    }

    /**
     * Method to complete proceed and complete the checkout
     */
    async checkout(quantity, petName)
    {
        await this.quantityInput(petName).setValue(quantity)
        await this.proceedCheckout.click();
        await this.continueCheckoutButton.click();
        await this.confirmCheckoutButton.click();
    }
}

module.exports = new PetStoreBuyPet();