'use strict';

var config = require('../config'),
    request = require('../request'),
    Q = require('q'),
    $ = require('cheerio'),
    mixIn = require('mout/object/mixIn'),
    parseTitle = require('../parsers/getStation/parseTitle'),
    parseSchedule = require('../parsers/getStation/parseSchedule'),
    parseLocationAddress = require('../parsers/getStation/parseLocationAddress'),
    getGeocode = require('../services/getGeocode'),
    getLines = require('../services/getLines');

function setStation(model, id) {
  return mixIn(
    {id: id},
    parseTitle(model),
    parseSchedule(model),
    {
      location: parseLocationAddress(model, id)
    }
  );
}

function setStationGeocode(model) {
  console.log(model);
  // var address = model.location.address;
return;
  return getGeocode(address)
          .then(function(response) {
            model.location = mixIn(model.location, response);
            return model;
          });
}

module.exports = function(station) {
  var lines = getLines(station);

  return request('get-station', [lines[0], station])
          .then(function(response) {
            return setStation(response, station);
          })
          .then(function(response) {
            return setStationGeocode(response);
          })
          .then(function(response) {
            console.log(response);
          });
};
