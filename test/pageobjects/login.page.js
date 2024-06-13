const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('[name="loginfmt"]');
    }

    get inputPassword() {
        return $('[name="passwd"]');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get btnMicrosoft() {
        return $('.ps-2');
    }

    get btnNext() {
        return $('#idSIButton9');
    }

    get btnNo() {
        return $('#idBtn_Back');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.btnMicrosoft.click();
        await this.inputUsername.setValue(username);
        await this.btnNext.click();
        await browser.pause(5000);
        await this.inputPassword.clearValue();
        await this.inputPassword.setValue(password);
        await this.btnNext.click();
        await this.btnNo.click();
        await browser.pause(5000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dashboard');
    }
}

module.exports = new LoginPage();
