// Helper to capture task output (adapted from tests for grunt-contrib-jshint)

var fs = require('fs'),
	grunt = require('grunt'),
	path = require('path');
	mkdirp = require('mkdirp');

module.exports = function(captureFile, quiet, run, done) {
	var fd;
	if (captureFile) {
		mkdirp.sync(path.dirname(captureFile));
		fd = fs.openSync(captureFile, 'w');
	}
	// Hook process.stdout.write
	var hooker = grunt.util.hooker;
	hooker.hook(process.stdout, 'write', {
		// This gets executed before the original process.stdout.write
		pre: function(result) {
			// Write result to file if it was opened
			if (fd) {
				fs.writeSync(fd, result);
			}
			// Prevent the original process.stdout.write from executing if quiet was specified
			if (quiet) {
				return hooker.preempt();
			}
		}
	});
	// Execute the code whose output is to be captured
	run(function(error, failureCount) {
		// close the file if it was opened
		if (fd) {
			fs.closeSync(fd);
		}
		// Restore process.stdout.write to its original value
		hooker.unhook(process.stdout, 'write');
		// Actually test the actually-logged stdout string to the expected value
		done(error, failureCount);
	});
};