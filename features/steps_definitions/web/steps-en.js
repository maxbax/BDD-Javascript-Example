const {Given, When, Then, AfterAll} = require('@cucumber/cucumber');
const {Builder, By, Capabilities, Key} = require('selenium-webdriver');
const assert = require('assert').strict;
require('chromedriver');

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', {'w3c': false});
const driver = new Builder().withCapabilities(capabilities).build();
driver.manage().setTimeouts( {implicit: 10000} );

Given('I am on the Github search page', async function() {
  await driver.get('https://github.com/');
});

When('I search for {string}', async function(searchTerm) {
  const element = await driver.findElement(By.name('q'));
  element.sendKeys(searchTerm, Key.RETURN);
});

When('I wait for {int} seconds/second', async function(seconds) {
  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    }, seconds * 1000);
  });
});

Then('the page title should contains the word {string}', {timeout: 60 * 1000}, async function(searchTerm) {
  const title = await driver.getTitle();
  const isTitleStartWithCheese = title.toLowerCase().includes(`${searchTerm}`);
  assert.equal(isTitleStartWithCheese, true);
});

AfterAll( async function() {
  await driver.quit();
});
