/**
 * MochaJS + ChaiJS + SinonJS Test Runner
 */

'use strict';

var capture = require('../lib/capture');

module.exports = function(grunt) {



	/**
	 * Try to configure a coverage filter using the coverage specification from
	 * the Grunt configuration.
	 *
	 * "/project-folder/src/" is used as default filter for test coverage
	 */

	var filterProjectSrc = process.cwd();
	filterProjectSrc = filterProjectSrc.substr(filterProjectSrc.lastIndexOf('/'), filterProjectSrc.length) + '/src/';
	
	if (grunt.config.data['mocha-chai-sinon'].coverage) {
        require('blanket')({
            pattern: grunt.config.data['mocha-chai-sinon'].coverage.options.filter || filterProjectSrc
        });
    } else {
    	require('blanket')({
            pattern: filterProjectSrc
        });
    }





	/**
	 * Grunt Task
	 */
	
	grunt.registerMultiTask('mocha-chai-sinon', 'MochaJS + ChaiJS + SinonJS test runner', function() {

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