'use strict';

/**
 * Prints Malaco banner on the command line.
 */

var figlet = require('figlet'),
    packageName = require('package').name,
    options = {
      font: 'Roman'
    },
    output = figlet.textSync(packageName, options);

console.log(output);
