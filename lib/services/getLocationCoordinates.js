'use strict';

var coordinates = require('../data/coordinates');

module.exports = function(id) {
  var model = coordinates[id].split(',');

  return {
    latitude: model[0],
    longitude: model[1]
  };
};
