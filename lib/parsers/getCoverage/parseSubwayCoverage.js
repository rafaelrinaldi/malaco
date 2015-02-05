'use strict';

var mixIn = require('mout/object/mixIn'),
    getLine = require('../../services/getLine');

module.exports = function(response) {
  var stations,
      model = {},
      lineModel;

  Object.keys(response).forEach(function(line) {
    stations = response[line];

    stations.forEach(function(station) {
      lineModel = {id: line, stop: station.stop};

      // if station already exists, append new line
      if(model[station.id]) {
        model[station.id].lines.push(lineModel);
      // otherwise create a new lines array and append line entry
      } else {
        model[station.id] = {
          lines: [lineModel]
        };
      }
    });
  });

  return model;
}
