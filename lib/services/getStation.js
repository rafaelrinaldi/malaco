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

function setStation(response) {
  return mixIn(
    parseTitle(response),
    parseSchedule(response),
    {
      location: parseLocationAddress(response)
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

module.exports = function(options) {
  return request('get-station',[options.line, options.station])
          .then(function(response) {
            return setStation(response);
          })
          .then(function(response) {
            return setStationGeocode(response);
          })
          .then(function(response) {
            console.log('all good',response);
          })
};
