'use strict';

var $ = require('cheerio'),
    mixIn = require('mout/object/mixIn'),
    properCase = require('mout/string/properCase'),
    getLocationCoordinates = require('../../services/getLocationCoordinates');

module.exports = function(response, id) {
  var address,
      coordinates;

  address = $(response).find('#localidade span').text(),
  address = properCase(address);

  coordinates = getLocationCoordinates(id);

  return mixIn(
          coordinates,
          {address: address}
        );
};
