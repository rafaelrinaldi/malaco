'use strict';

var Q = require('q'),
    mixIn = require('mout/object/mixIn'),
    getAddress = require('../../services/getAddress'),
    getGeocode = require('../../services/getGeocode'),
    getLocation = require('../../services/getLocation'),
    parseAddresses = require('./parseAddresses');

function parseLines(response) {
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

module.exports = function(response) {
  model = response;

  model = parseLines(model);
  model = parseAddresses(model);
  model = getLocation(model)
            .done(function(response) {
              console.log(response);
            })

  console.log(model);
};
