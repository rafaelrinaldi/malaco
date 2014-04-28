'use strict';

var addresses = require('../data/addresses');

module.exports = function(id) {
  return addresses[id];
};
