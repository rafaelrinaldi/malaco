'use strict';

var config = require('../config'),
    request = require('../request'),
    $ = require('cheerio'),
    mixIn = require('mout/object/mixIn'),
    parseTitle = require('../parsers/getStation/parseTitle'),
    parseSchedule = require('../parsers/getStation/parseSchedule'),
    parseLocation = require('../parsers/getStation/parseLocation');

module.exports = function(options) {
  return request('get-station', [options.line, options.station])
          .then(function(response) {
            return mixIn(
              parseTitle(response),
              parseSchedule(response),
              parseLocation(response)
            );
          });
}
