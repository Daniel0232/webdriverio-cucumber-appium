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
        const petSelector = $(`a[href*="${petName.replace(/\s+/g, '+')}"]`); // Reemplaza espacios por '+' si es necesario en la URL
        await petSelector.click();
    }

    /**
     * Add the selected pet to the cart
     */
    async addPetToCart() {
        const addToCartButton = $('button[name="addToCart"]'); // Ajusta el selector si es diferente
        await addToCartButton.click();
    }

}

module.exports = new PetStoreBuyPet();