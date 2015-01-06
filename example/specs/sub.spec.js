/**
 * Example Spec File
 * unit test a specific module of the application.
 * the more specific the module the more accurate the test!
 */

'use strict';

// include the specific module tested by this spec:
var sub = require('../src/sub');

describe('sub()', function() {
    
    it('should return the subtraction of two integer numbers', function() {
        expect(
            sub(2, 1)
        ).to.equal(1);
    });
    
});