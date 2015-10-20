'use strict';

var expect = require('unexpected');
var jserror = require('../lib/index');

describe('jserror', function () {
  it('should return a function', function () {
    return expect(jserror, 'to be a function');
  });
});
