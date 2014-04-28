'use strict';

var Q = require('q'),
    request = require('../request'),
    config = require('../config'),
    parseLines = require('../parsers/getLines/parseLines'),
    getStation = require('./getStation');

function setLines(model) {
  return request('get-lines')
          .then(function(response) {
            return parseLines(response);
          });
}

function setStations(model) {
  var stations,
      sequence = [];

  // p.push(setStation('linha-1-azul', 'estacao-jabaquara'))
  // p.push(setStation('linha-1-azul', 'estacao-conceicao'))
  // p.push(setStation('linha-1-azul', 'estacao-sao-judas'))

  Object.keys(model).forEach(function(line) {
    stations = model[line];
    stations.forEach(function(station) {
        sequence.push(
          setStation(line, station.id)
        );
    });
  });

  Q.all(sequence)
    .then(function() {
      console.log('finished!');
    })
    .done(function() {
      console.log('done');
    });

  // Q.all(ps)
  //   .then(function() {
  //     console.log('finished');
  // });

  // return deferred.promise;
}

function setStation(line, station) {
  return getStation({
    line: line,
    station: station
  });
}

module.exports = function() {
  return setLines()
          .then(function(response) {
            return setStations(response);
          });
};
