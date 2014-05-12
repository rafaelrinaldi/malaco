'use strict';

var log = require('debug')('getLocation'),
    deferred = require('q').defer(),
    mixIn = require('mout/object/mixIn'),
    getStation = require('./getStation'),
    getGeocode = require('./getGeocode'),
    model,
    index,
    total;

/**
 * Sequential task runner to get the location of all subway stations.
 * It has to be executed sequentially, one after another, otherwise the geocoding service
 * will go crazy and the results will not be returned.
 *
 * Ps.: I wish Promises could be more friendly with non-promise-based methods. That would
 * have saved a lot of time here.
 */

function next() {
  if(index === total) {
    done(model);
  } else {
    task();
    ++index;
  }
}

function task() {
  var id = Object.keys(model)[index],
      station = model[id];

  getStation(id)
    .then(function(response) {
      log('Data for "%s" was successfully saved', id);
      return mixIn(station, response);
    })
    .then(next);
}

function done() {
  deferred.resolve(model);
}

module.exports = function(response) {
  model = response;
  index = 0;
  total = Object.keys(model).length;

  log('Will collect the location data of all subway stations, this will take a while');

  next();

  return deferred.promise;
};
