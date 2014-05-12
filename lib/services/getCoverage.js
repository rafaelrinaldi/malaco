'use strict';

/**
 * This service will get the coverage data of Sao Paulo's subway system.
 */

var Q = require('q'),
    request = require('../request'),
    parseLines = require('../parsers/getCoverage/parseLines');

module.exports = function() {
  return request('get-lines')
          .then(function(response) {
            return parseLines(response);
          });
};
