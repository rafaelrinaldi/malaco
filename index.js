'use strict';

var DEBUG = process.env.DEBUG || 'none',
    writeFile = require('fs').writeFile,
    getStatus = require('./lib/services/getStatus');

getStatus()
  .then(function(response) {
    if(DEBUG === '*') {
      console.log(response);
    }
    saveStatusJSON(response)
  });

function saveStatusJSON(data) {
  var buffer = JSON.stringify(data, null, 2);

  writeFile('status.json', buffer, function(error) {
    if(error) {
      console.error(error);
      return;
    }
  });
}
