'use strict';

var request = require('../request'),
    config = require('../config'),
    parseLastUpdated = require('../parsers/getStatus/parseLastUpdated'),
    parseStatus = require('../parsers/getStatus/parseStatus'),
    mixIn = require('mout/object/mixIn');

module.exports = function() {
  return request('get-status')
          .then(function(response) {
            return mixIn
                    (
                      parseLastUpdated(response),
                      parseStatus(response)
                    )
          });
};
