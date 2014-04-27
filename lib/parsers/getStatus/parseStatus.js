'use strict';

var $ = require('cheerio'),
    hyphenate = require('mout/string/hyphenate'),
    removeNonASCII = require('mout/string/removeNonASCII');

function formatLineName(name) {
  return hyphenate(name);
}

module.exports = function(response) {
  var markup = $(response),
      wrapper = markup.find('#status-linhas'),
      lines = wrapper.find('ul li a:not([id="expand"])'),
      headline = wrapper.find('ul li:first-child h2').text(),
      line,
      status = {};

  lines.each(function(index, element) {
    line = $(element).text();
    line = formatLineName(line);
    // console.log(line);

  });

  // return 'foo';
};
