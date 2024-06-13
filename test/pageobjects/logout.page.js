const { $ } = require('@wdio/globals')

class Logout {
    get profileButton() {
        return $("aria/Ravi Ranjan");
    }
    get signOutButton() {
        return $("aria/Logout");
    }

    async Profile(){
        await this.profileButton.click();
    }

    async SignOut(){
        await this.signOutButton.click();
    }
}

module.exports = new Logout();