/**
 * Example Math Module
 *
 * this is the main file of this example module and it requires the
 * sub modules in order to expose a coherent API for a Math module.
 *
 * the only responsibility here is to link the correct API name to the
 * correct sub-module and it is exactly what we are going to test in the
 * relative spec file.
 */

'use strict';

exports.sum = require('./src/sum');
exports.sub = require('./src/sub');
