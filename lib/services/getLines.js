'use strict';

var stations = require('stations.json');

module.exports = function(station) {
  return stations[station].lines;
};
