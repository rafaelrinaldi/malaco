'use strict';

var Q = require('q'),
    request = require('../request'),
    config = require('../config'),
    parseLines = require('../parsers/getLines/parseLines'),
    getStation = require('./getStation');

module.exports = function() {
  return request('get-lines')
          .then(function(response) {
            return parseLines(response);
          });
};
