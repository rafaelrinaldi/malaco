'use strict';

var $ = require('cheerio'),
    isEmpty = require('mout/lang/isEmpty'),
    parseScheduleItem = require('./parseScheduleItem');

module.exports = function(response) {
  var markup = $(response),
      schedule = markup.find('#funcionamento'),
      regularDays = schedule.find('.domSex'),
      saturday = schedule.find('.horarios:not(.domSex)'),
      schedule = [],
      /**
       * Filter to remove invalid items from schedule.
       * @param {Object} item Item model.
       * @return {Boolean} `true` if item is valid, `false` otherwise.
       */
      removeInvalidItems = function(item) {
        return !isEmpty(item.period) && !isEmpty(item.title);
      };

  schedule.push(parseScheduleItem(regularDays));
  schedule.push(parseScheduleItem(saturday));

  return {
    schedule: schedule.filter(removeInvalidItems)
  };
};
