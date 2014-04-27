'use strict';

var $ = require('cheerio'),
    properCase = require('mout/string/properCase');

module.exports = function(response) {
  var markup = $(response),
      title = markup.find('#contentEstacao h1').text();

  // Add space between hyphens (if they exist) for consistency
  title = title.replace(/-/g, ' - ');
  // Format string to proper case
  title = properCase(title);

  return {
    title: title
  };
};
