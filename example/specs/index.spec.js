/**
 * Example Spec File
 * this spec tests the example library file so it basically
 * tests that the correct API are exposed by that module
 */

'use strict';

// include the specific module tested by this spec:
var MathModule = require('../index');
var SumModule = require('../src/sum');
var SubModule = require('../src/sub');

describe('Math Module', function() {
    
    it('should expose a sum() method', function() {
        expect(MathModule.sum).to.equal(SumModule);
    });
    
    it('should expose a sub() method', function() {
        expect(MathModule.sub).to.equal(SubModule);
    });
    
});
