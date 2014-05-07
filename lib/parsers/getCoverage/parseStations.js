'use strict';

var log = require('debug')('parseStations'),
    getLocation = require('../../services/getLocation'),
    parseSubwayCoverage = require('./parseSubwayCoverage'),
    parseAddresses = require('./parseAddresses');

/**
 * 1. Parse subway coverage
 * 2. Parse stations adresses (which are manually set, see `addresses.js`)
 * 3. Start `getLocation()` sequence
 */
module.exports = function(response) {
  var model = response;

  log('Parsing subway coverage');
  model = parseSubwayCoverage(model);
  log('Parsing stations addresses');
  model = parseAddresses(model);

  return getLocation(model);
};
