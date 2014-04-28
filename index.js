'use strict';

var getLines = require('./lib/services/getLines'),
    getStation = require('./lib/services/getStation'),
    getStatus = require('./lib/services/getStatus'),
    getGeocode = require('./lib/services/getGeocode');

getLines()

// getStation({
//   line: 'linha-1-azul',
//   station: 'estacao-sao-bento'
// })
// .then(function(response) {
//   console.log(response);
// });

// getStatus()
//   .then(function(response) {
//     console.log(response);
//   });

// getGeocode('Tamanduatei, Brazil')
//   .then(function(response) {
//     console.log('->',response);
//   })
//   .done();


