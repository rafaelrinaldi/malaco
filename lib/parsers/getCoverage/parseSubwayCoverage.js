'use strict';

module.exports = function(response) {
  var stations,
      model = {};

  Object.keys(response).forEach(function(line) {
    stations = response[line];

    stations.forEach(function(station) {

      // if station already exists, append new line
      if(model[station]) {
        model[station].lines.push(line);
      // otherwise create a new lines array and append line entry
      } else {
        model[station] = {
          lines: [line]
        };
      }
    });
  });

  return model;
}
