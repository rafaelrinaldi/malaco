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
      lineModel = mixIn(
        {id: line, stop: station.stop},
        getLine(line)
      );

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
