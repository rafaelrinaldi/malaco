'use strict';

var deferred = require('q').defer(),
    mixIn = require('mout/object/mixIn'),
    getGeocode = require('./getGeocode'),
    model,
    index,
    total;

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
      station = model[id],
      address = station.location.address;

  getGeocode(address)
    .then(function(response) {
      station.location = mixIn(station.location, response);
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

  next();

  return deferred.promise;
};
