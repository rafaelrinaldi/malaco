'use strict';

var $ = require('cheerio'),
    PARSE_STATION_ID_REGEX = /estacao-(.*?)(\w|-)+/;

module.exports = function(response) {
  var markup = $(response),
      lines = markup.find('#menuLinhas ul[class^="linha"]'),
      line,
      lineId,
      stations,
      station,
      stationId,
      model = {};

  // Loop through all lines nodes to create line index on model object
  lines.each(function(index, line) {
    lineId = $(line).attr('class');
    model[lineId] = [];
  });

  // Loop through all line keys, find their info and fill their value on the list
  Object.keys(model).forEach(function(lineId) {
    line = markup.find('#menuLinhas .' + lineId);
    stations = line.find('li a');
    stations.each(function(index, station) {
      stationId = $(station).attr('href');
      stationId = stationId.match(PARSE_STATION_ID_REGEX)[0];
      model[lineId].push({id: stationId});
    });
  });

  return model;
};
