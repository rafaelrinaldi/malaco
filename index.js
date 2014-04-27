'use strict';

var getLines = require('./lib/services/getLines'),
    getStation = require('./lib/services/getStation'),
    getStatus = require('./lib/services/getStatus');

getLines()
  .then(function(response) {
    console.log('success!', response);
  })
  .catch(function(error) {
    console.log('something went wrong');
    console.log(error);
  })
  .done();

// line: 'linha-3-vermelha',
//   station: 'estacao-barra-funda'
// getStation({
//   line: 'linha-3-vermelha',
//   station: 'estacao-barra-funda'
// })
// .then(function(response) {
//   console.log(response);
// });


// getStatus();
