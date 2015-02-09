'use strict';

/**
 * CLI interface.
 */

var figlet = require('figlet'),
    packageName = require('package').name,
    options = {
      font: 'Roman'
    },
    banner = figlet.textSync(packageName, options);

console.log('');
console.log(banner);
console.log('Usage');
console.log('\tλ help\t\tshow help');
console.log('\tλ status\tget subway operational status');
console.log('\tλ import\timport data to output mechanism');
console.log('\tλ connect\tcompile assets and startup local server');
console.log('\tλ serve\t\tserve port 9000 through ngrok');
console.log('\tλ refresh\tforce data to be updated');
console.log('\tλ simulation\truns iOS simulator');
console.log('');
console.log('##################################################################');
