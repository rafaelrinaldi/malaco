'use strict';

var properCase = require('mout/string/properCase');

module.exports = function(item) {
  var period = item.find('.hora').text(),
      title = item.find('.dia').text();

  return {
    period: period,
    title: properCase(title)
  }
};
