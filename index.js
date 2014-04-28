'use strict';

var getLines = require('./lib/services/getLines'),
    getStation = require('./lib/services/getStation'),
    getStatus = require('./lib/services/getStatus'),
    getGeocode = require('./lib/services/getGeocode');

// getLines()
//   .then(function(response) {
//     traceLines(response)
//   })

function traceLines(model) {
  // var stations;
  // Object.keys(model).forEach(function(line) {
    // stations = model[line];
    // stations.forEach(function(station) {
      // console.log(line, '->',station);
      // getGeocode()
    // })
  // });
}
// line: 'linha-3-vermelha',
//   station: 'estacao-barra-funda'
getStation({
  line: 'linha-1-azul',
  station: 'estacao-sao-bento'
})
.then(function(response) {
  console.log(response);
});


// getStatus()
//   .then(function(response) {
//     console.log(response);
//   });

// getGeocode('Tamanduatei, Brazil')
//   .then(function(response) {
//     console.log('->',response);
//   })
//   .done();


