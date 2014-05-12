'use strict';

var addresses = require('../data/addresses');

module.exports = function(id) {
  var model = addresses[id].split(',');

  return {
    latitude: model[0],
    longitude: model[1]
  };
};
