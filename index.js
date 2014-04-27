'use strict';

var getLines = require('./lib/services/getLines'),
    getStation = require('./lib/services/getStation'),
    getStatus = require('./lib/services/getStatus'),
    getGeocode = require('./lib/services/getGeocode');

// getLines()
//   .then(function(response) {
//     console.log('success!', response);
//   })
//   .catch(function(error) {
//     console.log('something went wrong');
//     console.log(error);
//   })
//   .done();

// line: 'linha-3-vermelha',
//   station: 'estacao-barra-funda'
// getStation({
//   line: 'linha-4-amarela',
//   station: 'estacao-butanta'
// })
// .then(function(response) {
//   console.log(response);
// });


getStatus()
  .then(function(response) {
    // console.log('here');
  });

// getGeocode('Tamanduatei, Brazil')
//   .then(function(response) {
//     console.log('->',response);
//   })
//   .done();


