var chai = require('chai');
global.assert = chai.assert;
global.expect = chai.expect;
global.should = chai.should;

global.AS3JS = require('../lib/as3.js');
// TODO: Expose packages to the tests
global.Packages = 
