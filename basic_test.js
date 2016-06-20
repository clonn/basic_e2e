
Feature('Test google_basic.js');

Scenario('test something', (I) => {
  I.amOnPage('https://www.google.com.tw');
  I.see('Google');
});
