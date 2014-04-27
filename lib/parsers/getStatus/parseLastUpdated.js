'use strict';

var $ = require('cheerio');

module.exports = function(response) {
  var markup = $(response),
      lastUpdated = markup.find('#dateCurrentLineFourStatus').text();

  return {
    'last-updated': lastUpdated
  };
};
