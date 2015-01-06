/**
 * Example Spec File
 * unit test a specific module of the application.
 * the more specific the module the more accurate the test!
 */

'use strict';

// include the specific module tested by this spec:
var sum = require('../src/sum');

describe('sum()', function() {
    
    it('should return the sum of two integer numbers', function() {
        expect(
            sum(1, 2)
        ).to.equal(3);
    });
    
});