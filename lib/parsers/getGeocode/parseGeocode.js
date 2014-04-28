'use strict';

module.exports = function(response) {
  var location,
      latitude,
      longitude;

  if(response && response.results && response.results.length) {
    location = response.results[0].geometry.location;

    return {
      latitude: parseFloat(location.lat),
      longitude: parseFloat(location.lng)
    };
  }

  return {};

};
