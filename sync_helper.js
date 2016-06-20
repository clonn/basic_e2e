
'use strict';

class Sync extends Helper {

  // before/after hooks
  _before() {
    // remove if not used
    this.helpers['Protractor'].browser.ignoreSynchronization = true;
  }

  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = Sync;
