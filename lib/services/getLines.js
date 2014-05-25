'use strict';

/**
 * Get stations lines.
 */

var stations = require('stations.json');

module.exports = function(station) {
  return stations[station].lines;
};
