const { Given, When, Then } = require('@wdio/cucumber-framework');
const logger = require('@wdio/logger')
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage,
    hehe: 1
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    console.log('gia tri cua page la:  ')
    console.log(page)
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

