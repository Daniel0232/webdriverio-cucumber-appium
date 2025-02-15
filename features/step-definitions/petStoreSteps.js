const { When, Then } = require('@cucumber/cucumber');
const PetStore = require('../pageobjects/petStore.page');
const PetStoreLogin = require('../pageobjects/petStoreLogin.page');
const PetStoreRegister = require('../pageobjects/petStoreRegister.page');
const PetStoreBuyPet = require('../pageobjects/petStoreBuyPet.page');
const pages = {
    "sing in": PetStore,
    "register": PetStoreLogin,
}
When(/^I enter on the "(.*)" page$/, async (pageName) => {
    const pageObject = pages[pageName.toLowerCase()];
    if (pageName.toLowerCase() === "sing in") {
        await pageObject.goSingIn();
        console.log(`✅ Navegando a la página: Sing In`);
    } else if (pageName.toLowerCase() === "register") {
        await pageObject.goRegister();
        console.log(`✅ Navegando a la página: Registro`);
    } else {
        throw new Error(`❌ No hay una acción definida para la página: "${pageName}"`);
    }
});

When(/^I register with the following details$/, async (table) => {
    const userDetailsList = table.hashes(); // Transform the table in a key-value object so you can extract the value of each field in the array of objects with a for-each

    for (const userDetails of userDetailsList) {
        try {
            //calls the register method
            await PetStoreRegister.register(
                userDetails.username,
                userDetails.password,
                userDetails.firstName,
                userDetails.lastName,
                userDetails.email,
                userDetails.phone,
                userDetails.address1,
                userDetails.address2,
                userDetails.city,
                userDetails.state,
                userDetails.zip,
                userDetails.country
            );
            console.log("✅ Registro completado con éxito");
        } catch (error) {
            console.error("❌ Error al intentar registrar:", error);
            throw error;
        }
    }
});

When(/^I select the (.*) category and choose the (.*) and add it to the cart$/, async (category, petName) => {

    try {
        PetStoreBuyPet.selectCategory(category);
        console.log(`✅ La categoria se ha elegido con éxito: `);
        try {
            PetStoreBuyPet.choosePet(petName);
            console.log(`✅ La mascota se ha elegido con éxito: `);
            try {
                PetStoreBuyPet.addPetToCart(petName);
                console.log(`✅ La mascota se ha añadido al carro con éxito: `);
            } catch (error) {
                console.error(`❌ Ha habido un error al añadir la mascota al carro: `, error);
                throw error;
            }
        } catch (error) {
            console.error(`❌ Ha habido un error al elegir la mascota: `, error);
            throw error;
        }
    } catch (error) {
        console.error(`❌ Ha habido un error al elegir la categoria: `, error);
        throw error;
    }
});

When(/^I choose the quantity (.*) of the (.*) and proceed with the checkout and confirm my order$/, async (quantity, petName) => {
    try {
        PetStoreBuyPet.checkout(quantity, petName);
        console.log(`✅ El checkout se ha realizado con exito: `);
    } catch (error) {
        console.error(`❌ Ha habido un error al realizar el checkout: `, error);
        throw error;
    }
});

Then(/^I should see my order submited (.*)$/, async (url) => {
    try {
        await expect(browser).toHaveUrl(url)
        console.log(`✅ Vemos la pagina de pedido confirmado`);
    } catch (error) {
        console.error(`❌ Ha habido un error al confirmar el pedido: `, error);
        throw error;
    }
});
