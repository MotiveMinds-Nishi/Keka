const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Dashboard {
    get btnClockIN() {
        return $("aria/Web Clock-In");
    }

    get btnClockOut() {
        return $("aria/Clock-out");
    }

    get timeStamp(){
        return $("div:nth-of-type(3) h1");
    }

    async clockIN() {
        await this.btnClockIN.click();
    }

    async clockOut() {
        await this.btnClockOut.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

module.exports = new Dashboard();
