'use strict';

var getCoverage = require('./lib/services/getCoverage'),
    getStation = require('./lib/services/getStation'),
    getStatus = require('./lib/services/getStatus'),
    getGeocode = require('./lib/services/getGeocode'),
    getDirections = require('./lib/services/getDirections');

// getCoverage()
//   .then(function(response) {
//     console.log(response);
//   });

// var lines = require('./lib/services/getLines');

// console.log(lines('estacao-sao-bento'));

// getStation('estacao-sao-bento')
//   .then(function(response) {
//     console.log(response);
//   });

// var a = require('./lib/data/stations');
// var all = {};

// for(var key in a) {
//   var line;
//   all[key] = {
//     lines: [],
//     location: {
//       address: a[key]
//     }
//   }
// }

// console.log(all);

getStatus()
  .then(function(response) {
    console.log(response);
  });

// getGeocode('Tamanduatei, Brazil')
//   .then(function(response) {
//     console.log('->',response);
//   })
//   .done();


