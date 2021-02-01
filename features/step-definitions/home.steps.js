const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');


const HomePage = require('./../pageobjects/home.page');

Given(/^I am on the home page$/, () => {
    expect(HomePage.btnApp).to.exist;
});

When(/^I click (.*) button$/, (menu) => {
    HomePage.click(menu);
});

Then(/^I should see (.*)$/,  (menu) => {
    if (menu === 'App'){
        expect(HomePage.btnMedia).to.exist;
    } else if (menu === 'Content'){
        expect(HomePage.btnPackage).to.exist;
    }
});

