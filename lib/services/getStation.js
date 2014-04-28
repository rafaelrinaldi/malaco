'use strict';

var config = require('../config'),
    request = require('../request'),
    Q = require('q'),
    $ = require('cheerio'),
    mixIn = require('mout/object/mixIn'),
    parseTitle = require('../parsers/getStation/parseTitle'),
    parseSchedule = require('../parsers/getStation/parseSchedule'),
    parseLocationAddress = require('../parsers/getStation/parseLocationAddress'),
    getGeocode = require('../services/getGeocode');

function setStation(model, id) {
  return mixIn(
    parseTitle(model),
    parseSchedule(model),
    {
      location: parseLocationAddress(model, id)
    }
  );
}

function setStationGeocode(model) {
  var address = model.location.address;

  return getGeocode(address)
          .then(function(response) {
            model.location = mixIn(model.location, response);
            return model;
          });
}

module.exports = function(station) {
  var line = getLine(station);

  return request('get-station', [line, station]);
};
