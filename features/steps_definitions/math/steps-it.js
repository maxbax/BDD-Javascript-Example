const {Given, When, Then} = require('@cucumber/cucumber');
const assert = require('assert').strict;

Given('una variabile impostata a {int}', function(number) {
  this.setTo(number);
});

When('incremento la variabile di {int}', function(number) {
  this.incrementBy(number);
});

Then('la variabile dovrebbe contenere {int}', function(number) {
  assert.equal(this.variable, number);
});

