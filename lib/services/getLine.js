'use strict';

/**
 * Get line model.
 */

var lines = require('../data/lines');

module.exports = function(id) {
  return lines[id];
};
