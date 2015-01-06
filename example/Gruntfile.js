/**
 * grunt-mocha-chai-sinon 
 * Example Project Setup
 *
 * !!! PLEASE READ THE READMEFILE !!!
 *
 */

'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),

		// test runner suite
		'mocha-chai-sinon': {
			options: {
				ui: 'bdd'
			},
			build: {
				src: ['./specs/**/*.spec.js'],
				options: {
					reporter: 'spec'
				}
			}
		},

		watch: {
			build: {
				files: [
					'./index.js',
					'./src/**/*.js',
					'./specs/**/*.js'
				],
				tasks: [
					'default'
				]
			}
		}

	});


	/**
	 * Load Dependencies
	 */
	
	grunt.loadNpmTasks("grunt-mocha-chai-sinon");
	grunt.loadNpmTasks("grunt-contrib-watch");


	/**
	 * Register Tasks
	 */

	grunt.registerTask('default', [
		'mocha-chai-sinon:build'
	]);

	grunt.registerTask('start', [
		'default',
		'watch:build'
	]);

};