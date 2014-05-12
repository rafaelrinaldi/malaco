'use strict';

var getAddress = require('../../services/getAddress');

module.exports = function(response) {
  var model = response,
      location,
      station,
      stationModel;

  for(station in model) {
    stationModel = model[station];

    if(!stationModel.location) {
      location = stationModel.location = {};
    }

    location.address = getAddress(station);
  }

  return model;
};
