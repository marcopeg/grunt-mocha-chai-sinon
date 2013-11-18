grunt-mocha-chai-sinon
======================

> Simple test runner for [_GruntJS_][1] using [_MochaJS_][2] as test framework, [_ChaiJS_][3] as assertion library for [BDD][4] and [TDD][5] and [_SinonJS_][6] as spyes/stubs/mocks utility library.


## Gruntfile Example

```
// Gruntfile.js
module.exports = function(grunt) {
    
    // configure tasks
    grunt.initConfig({
        'grunt-mocha-chai-sinon': {
            build: {
                src: ['./specs/**/*.spec.js'],
	    	    options: {
        		    ui: 'bdd',
        			reporter: 'spec'
	        	}
        	}
        }
    });
    
    // load required tasks
    grunt.loadNpmTasks("grunt-mocha-chai-sinon");
    
    // register tasks for execution chain
    grunt.registerTask('test', [
		'grunt-mocha-chai-sinon'
	]);
};	
```


[1]: http://gruntjs.com/
[2]: http://visionmedia.github.io/mocha/
[3]: http://chaijs.com/
[4]: http://en.wikipedia.org/wiki/Behavior-driven_development
[5]: http://en.wikipedia.org/wiki/Test-driven_development
[6]: http://sinonjs.org/