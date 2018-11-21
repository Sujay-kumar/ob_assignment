const expect = require('chai').expect;
module.exports = function () {
    this.When(/^I launch open cart application$/, function () {
        return helpers.loadPage('https://www.opencart.com/');
    });
    this.Then(/^I should see "([^"]*)" title$/, function (keywords) {
        return driver.wait(until.elementsLocated(by.partialLinkText(keywords)), 10000);    
    });
    this.Then(/^I should click on login$/, function () {
        return driver.findElement(By.className("btn btn-link navbar-btn")).click();
    });
    this.Then(/^I enter email$/, function () {
        return driver.findElement(By.id("input-email")).sendKeys('sujay@gmail.com');
    });
    this.Then(/^I enter password$/, function () {
        return driver.findElement(By.id("input-password")).sendKeys('password');
    });
    this.Then(/^I click on login confirm$/, function () {
        return driver.findElement(By.className("btn btn-primary btn-lg hidden-xs")).click();
    });
    this.Then(/^I verify error message$/, function () {
        return driver.wait(until.elementsLocated(By.className("alert alert-danger")), 10000);
    });
}

