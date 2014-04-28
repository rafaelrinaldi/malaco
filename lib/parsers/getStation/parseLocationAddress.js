'use strict';

var $ = require('cheerio'),
    properCase = require('mout/string/properCase');

module.exports = function(response) {
  var markup = $(response),
      location = markup.find('#localidade span').text();

  // Adds a space after the comma that indicates the location number
  // location = location.replace(/,/, ', ');

  return {
    address: properCase(location)
  };
};
