'use strict';

var config = require('../config'),
    request = require('../request'),
    Q = require('q'),
    $ = require('cheerio'),
    mixIn = require('mout/object/mixIn'),
    parseTitle = require('../parsers/getStation/parseTitle'),
    parseSchedule = require('../parsers/getStation/parseSchedule'),
    parseLocation = require('../parsers/getStation/parseLocation'),
    getGeocode = require('../services/getGeocode'),
    getLines = require('../services/getLines');

function setStation(markup, id) {
  return mixIn(
    {id: id},
    parseTitle(markup),
    parseSchedule(markup),
    {
      location: parseLocation(markup, id)
    }
  );
}

/*
function setStationGeocode(model) {
  var address = model.location.address;

  return getGeocode(address)
          .then(function(response) {
            model.location = mixIn(model.location, response);
            return model;
          });
}
*/

module.exports = function(station) {
  var lines = getLines(station);

  return request('get-station', [lines[0].id, station])
          .then(function(response) {
            return setStation(response, station);
          });
          // .then(function(response) {
          //   return setStationGeocode(response);
          // });
};
