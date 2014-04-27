'use strict';

var getStatusType = require('../../helpers/getStatusType'),
    $ = require('cheerio'),
    hyphenate = require('mout/string/hyphenate'),
    removeNonASCII = require('mout/string/removeNonASCII');

function formatLineName(name) {
  return hyphenate(name);
}

function formatOperationalStatus(status) {
  return getStatusType(status);
}

function getOperationalStatus(element) {
  var operationalStatus;

  operationalStatus = $(element).find('img').attr('alt');
  operationalStatus = formatOperationalStatus(operationalStatus);

  return operationalStatus;
}

module.exports = function(response) {
  var markup = $(response),
      wrapper = markup.find('#status-linhas'),
      lines = wrapper.find('ul li a:not([id=expand])'),
      headline,
      headlines = wrapper.find('ul li:first-child h2'),
      line,
      operationalStatus,
      statusWrapper,
      statusMessage = '',
      status = {},
      setStatus = function(id, operationalStatus, statusMessage) {
        status[id] = {
          'operational-status': operationalStatus,
          'message': statusMessage || ''
        };
      };

  // I'm calling a headline each item whose status is displayed as featured in the home page
  // (aka any status that's not ok/green)
  headlines.each(function(index, element) {
    headline = $(element).text();
    headline = formatLineName(headline);

    // Grab the status wrapper element that matches current iteration index
    statusWrapper = wrapper.find('.status-wrapper')[index];
    statusMessage = $(statusWrapper).text();

    operationalStatus = getOperationalStatus($(element).parent());

    setStatus(headline, operationalStatus, statusMessage);
  });

  // console.log();

  lines.each(function(index, element) {
    line = $(element).text();
    line = formatLineName(line);

    operationalStatus = getOperationalStatus($(element).parent());

    setStatus(line, operationalStatus);
  });

  console.log(status);
};
