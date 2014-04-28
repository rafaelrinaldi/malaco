'use strict';

var getAddress = require('../../services/getAddress');

module.exports = function(response) {
  var model = response,
      line,
      location,
      station,
      stationModel,
      stations;

  for(station in model) {
    stationModel = model[station];

    if(!stationModel.location) {
      location = stationModel.location = {};
    }

    location.address = getAddress(station);
  }

  return model;
};
