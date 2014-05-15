'use strict';

var getLocationCoordinates = require('../../services/getLocationCoordinates');

module.exports = function(response) {
  var model = response,
      location,
      station,
      stationModel;

  for(station in model) {
    stationModel = model[station];
    location = getLocationCoordinates(station);
  }

  return model;
};
