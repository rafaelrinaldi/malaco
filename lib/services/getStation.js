'use strict';

var config = require('../config'),
    request = require('../request'),
    format = require('util').format,
    $ = require('cheerio'),
    mixIn = require('mout/object/mixIn'),
    parseTitle = require('../parsers/getStation/parseTitle'),
    parseSchedule = require('../parsers/getStation/parseSchedule'),
    parseLocation = require('../parsers/getStation/parseLocation');

function formatURL(options) {
  var service = config.services['get-station'],
      host = config.host,
      path = service.path,
      url = host + path,
      line = options.line || '',
      station = options.station || '';

  return format(url, line, station);
}

function parse() {
}
//line: 'linha-3-vermelha',
  // station: 'estacao-barra-funda'
module.exports = function(options) {
  return request('get-station', [options.line, options.station])
          .then(function(response) {
            return mixIn(
              parseTitle(response),
              parseSchedule(response),
              parseLocation(response)
            );
          });

  // request({
  //   url: url
  // })
  // .then(function(response) {
    // console.log('->',parseTitle(response));
    // console.log(parseSchedule(response));
    // console.log('->', parseLocation(response));
  // });
  //   .get(url)
  //   // Here's the trick
  //   .set('User-Agent', config['user-agent'])
  //   .end(function(response) {
  //     callback(response.text);
  //   });
}
