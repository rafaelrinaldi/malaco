'use strict';

var Q = require('q'),
    getLines = require('./services/getLines'),
    getAddress = require('./services/getAddress'),
    parseStations = require('./parsers/getLines/parseStations'),
    getLocation = require('./services/getLocation');


module.exports = function() {
  getLines()
    .then(function(response) {
      // console.log(response);
      parseStations(response);
    })
    .done(function(response) {
      console.log('done');
      // console.log(response);
    })
};

module.exports();
