const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');


const GaleryPage = require('./../pageobjects/gallery.page');
const LoginPage = require('./../pageobjects/login.page');
const ShrinePage = require('./../pageobjects/shrine.page');

Given(/^I am on the galery page$/, () => {
    //  driver.launchApp();
    expect(GaleryPage.cardReply).to.exist;
});

When(/^I click Shrine card on galery page$/, () => {
    // const screen = GaleryPage.cardReply;
    // const shrine = GaleryPage.cardShrine;
    // screen.touchAction([
    //     'press',
    //     { action: 'moveTo', element: shrine },
    //     'release'
    // ]);
    GaleryPage.cardShrine.click();

});
When(/^I click next button on login page$/, () => {
    LoginPage.btnNext.click();
});

Then(/^I should see Shrine page$/,  () => {
    expect(ShrinePage.btnDrawer).to.exist;
});

