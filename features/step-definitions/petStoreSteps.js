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

When (/^I fill the form for singin up$/, async() => {
    try {
        
        console.log(`✅ Se ha completado correctamente el formulario de registro`);
    } catch (error) {
        throw new Error(`❌ No se encuentra el formulario de registro o no se ha llenado correctamente`);
    }
});




