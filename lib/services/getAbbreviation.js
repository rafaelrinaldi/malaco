'use strict';

var abbreviations = require('../data/abbreviations');

module.exports = function(id) {
  return abbreviations[id];
};
