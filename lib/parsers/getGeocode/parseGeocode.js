'use strict';

module.exports = function(response) {
  var location = response.results[0].geometry.location;

  return {
    latitude: parseFloat(location.lat),
    longitude: parseFloat(location.lng)
  };
};
