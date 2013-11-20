grunt-mocha-chai-sinon
======================

> Simple test runner for [_GruntJS_][1] using [_MochaJS_][2] as test framework, [_ChaiJS_][3] as assertion library for [BDD][4] and [TDD][5] and [_SinonJS_][6] as spyes/stubs/mocks utility library.


## Gruntfile Example

```
// Gruntfile.js
module.exports = function(grunt) {
    
    // configure tasks
    grunt.initConfig({
        'mocha-chai-sinon': {
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
		'mocha-chai-sinon'
	]);
};	
```


## Test Coverage

Test coverage support is provided by [node-jscoverage](https://github.com/visionmedia/node-jscoverage) while source code is _coverage enabled_ with [BlancketJS](http://blanketjs.org/).

In order to activate test coverage you need to create a new configuration for the `mocha-chai-sinon` task and name it `coverage`.  
**The name matter!**

    'mocha-chai-sinon': {
        build: {
            src: ['./specs/**/*.spec.js'],
            options: {
                ui: 'bdd',
                reporter: 'spec'
            }
        },
        coverage: {
            src: ['./specs/**/*.spec.js'],
            options: {
                ui: 'bdd',
                reporter: 'html-cov',
                quiet: true,
                filter: '/foo/foo1/',
                captureFile: './coverage.html'
            }
        }
    }

By default `mocha-chai-sinon` add test coverage support to all loaded files who match the `/project-folder/src/` path but you can configure it with the `coverage.options.filter` option.



[1]: http://gruntjs.com/
[2]: http://visionmedia.github.io/mocha/
[3]: http://chaijs.com/
[4]: http://en.wikipedia.org/wiki/Behavior-driven_development
[5]: http://en.wikipedia.org/wiki/Test-driven_development
[6]: http://sinonjs.org/