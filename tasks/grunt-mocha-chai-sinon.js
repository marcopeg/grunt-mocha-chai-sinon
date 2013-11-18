/**
 * MochaJS + ChaiJS + SinonJS Test Runner
 */

'use strict';

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

		mocha.run(function (errCount) {
			done(errCount === 0);
		});

	});

};