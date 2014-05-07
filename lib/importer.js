'use strict';

/**
 * This is the importer script.
 * It'll collect all the stations data and turn it into a JSON file that will live in
 * the server's root.
 * Most of the services that I wrote rely on this data so make sure you run the importer
 * before making any other API call.
 *
 * TODO: Add subway station name to generated JSON file
 */

var writeFile = require('fs').writeFile,
    log = require('debug')('importer'),
    getCoverage = require('./services/getCoverage'),
    parseStations = require('./parsers/getCoverage/parseStations'),
    config = {
      file: './stations.json'
    };

function saveStationsJSON(data) {
  var buffer = JSON.stringify(data, null, 2);

  writeFile(config.file, buffer, function(error) {
    if(error) {
      log(error);
      return;
    }

    log('JSON file was successfully saved');
  });
}

module.exports = function() {
  getCoverage()
    .then(function(response) {
      log('Parsing stations data');
      return parseStations(response);
    })
    .then(function(response) {
      log('Saving stations data to a JSON file at "%s"', config.file);
      saveStationsJSON(response);
    })
    .done(function() {
      log('Import process is finished');
    });
}

module.exports();
