'use strict';

var request = require('../request'),
    config = require('../config'),
    parseLines = require('../parsers/getLines/parseLines');

module.exports = function() {
  return request('get-lines')
          .then(function(response) {
            return parseLines(response);
          });
};
