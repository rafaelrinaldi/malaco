'use strict';

var log = require('debug')('parseStations'),
    getLocation = require('../../services/getLocation'),
    parseSubwayCoverage = require('./parseSubwayCoverage'),
    parseAddresses = require('./parseAddresses');

module.exports = function(response) {
  var model = response;

  log('Parsing subway coverage');
  model = parseSubwayCoverage(model);
  log('Parsing stations addresses');
  model = parseAddresses(model);

  return getLocation(model);
};
