'use strict';

var StatusType = require('../enum/StatusType'),
    hyphenate = require('mout/string/hyphenate');

// Using hyphenate to normalize instead of lower case strings because of accents removal
function normalizeStatusName(status) {
  return hyphenate(status);
}

module.exports = function(status) {
  var status = normalizeStatusName(status),
      type,
      name;

  for(type in StatusType) {
    name = StatusType[type];
    name = normalizeStatusName(name);

    if(name === status) {
      return type;
    }
  }

  return null;
};
