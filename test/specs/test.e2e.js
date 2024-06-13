const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const DashboardPage = require('../pageobjects/dashboard.page')
const LogoutPage = require('../pageobjects/logout.page')

describe('My Keka application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await browser.maximizeWindow()
        await LoginPage.login('ravi.ranjan@motiveminds.com', 'Darbie@2023')
        await expect(SecurePage.flashAlert).toBeExisting()
    })

    xit('should Clock in at right time', async () => {
        await DashboardPage.clockIN();
        await browser.pause(10000);
        console.log(""+await DashboardPage.timeStamp.getText());
    })

    xit('should Clock Out at right time', async () => {
        await DashboardPage.clockOut();
        await browser.pause(5000);
        await DashboardPage.clockOut();
        await browser.pause(10000);
        console.log(await DashboardPage.timeStamp.getText());
    })

    it('should log Out after all activity', async () => {
        await LogoutPage.Profile();
        await LogoutPage.SignOut();
    })
})

