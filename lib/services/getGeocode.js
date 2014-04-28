'use strict';

var parseGeocode = require('../parsers/getGeocode/parseGeocode'),
    log = require('debug')('getGeocode'),
    Q = require('q'),
    gmaps = require('googlemaps'),
    options = {
      sensor: false
    };

module.exports = function(address) {
  var deferred = Q.defer();

  log('Getting coordinates for the address "%s"', address);

  gmaps.geocode(
    address,
    function(error, response) {
      if(error) {
        log(error);
        deferred.reject(error);
      } else {
        deferred.resolve(
          parseGeocode(response)
        );
      }
    },
    options.sensor,
    options.bounds,
    options.region,
    options.language
  );

  return deferred.promise;
};
