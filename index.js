'use strict';

var getCoverage = require('./lib/services/getCoverage'),
    getStation = require('./lib/services/getStation'),
    getStatus = require('./lib/services/getStatus'),
    getGeocode = require('./lib/services/getGeocode'),
    parseStations = require('./lib/parsers/getCoverage/parseStations');

getStatus()
  .then(function(response) {
    console.log(response);
  });
