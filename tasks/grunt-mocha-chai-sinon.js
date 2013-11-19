/**
 * MochaJS + ChaiJS + SinonJS Test Runner
 */

'use strict';

var capture = require('../lib/capture');

require('blanket')({
	// Only files that match the pattern will be instrumented
	pattern: '/src/'
});

module.exports = function(grunt) {
	
	grunt.registerMultiTask('grunt-mocha-chai-sinon', 'MochaJS + ChaiJS + SinonJS test runner', function() {

		var MochaJS = require('mocha'),
			ChaiJS = require('chai'),
			SinonJS = require('sinon'),
			options = this.options(),
			mocha = new MochaJS(options),
			done = this.async();

		// make ChaiJS + SinonJS available to all tests
		GLOBAL.should = ChaiJS.should;
		GLOBAL.expect = ChaiJS.expect;
		GLOBAL.assert = ChaiJS.assert;
		GLOBAL.sinon = SinonJS;

		this.filesSrc.forEach(function (file) {
			mocha.addFile(file);
		});


		/*
		mocha.run(function (errCount) {
			done(errCount === 0);
		});
		*/

		capture(options.captureFile, options.quiet, function(complete) {

			try {
				mocha.run(function(errCount) {
					complete(null, errCount)
				});
			} catch (err) {
				complete(err);
			}

		}, function(err, errCount) {
			if (err) {
				done(false);
			} else {
				done(errCount === 0)
			}
		});

	});

};