const { When } = require('@cucumber/cucumber');
const PetStore = require('../pageobjects/petStore.page');
const PetStoreLogin = require('../pageobjects/petStoreLogin.page');
const PetStoreRegister = require('../pageobjects/petStoreRegister.page');
const pages = {
    "sing in" : PetStore,
    "register" : PetStoreLogin
}
When(/^I enter on the "(.*)" page$/, async (pageName) =>{
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



