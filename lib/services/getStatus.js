'use strict';

var request = require('../request'),
    config = require('../config'),
    parseLastUpdated = require('../parsers/getStatus/parseLastUpdated'),
    parseStatus = require('../parsers/getStatus/parseStatus');

module.exports = function() {
  return request('get-status')
          .then(function(response) {
            // console.log(parseLastUpdated(response));
            console.log(parseStatus(response));
          });
};
