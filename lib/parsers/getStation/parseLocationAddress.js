'use strict';

var $ = require('cheerio'),
    properCase = require('mout/string/properCase'),
    getAddress = require('../../services/getAddress');

module.exports = function(response, id) {
  var location,
      address;

  if(id) {
    address = getAddress(id);
  } else {
    location = $(response).find('#localidade span').text(),
    address = properCase(location);
  }

  return {
    address: address
  };
};
