'use strict';

var $ = require('cheerio'),
    parseScheduleItem = require('./parseScheduleItem');

module.exports = function(response) {
  var markup = $(response),
      schedule = markup.find('#funcionamento'),
      regularDays = schedule.find('.domSex'),
      saturday = schedule.find('.horarios:not(.domSex)'),
      schedule = [];

  schedule.push(parseScheduleItem(regularDays));
  schedule.push(parseScheduleItem(saturday));

  return {
    schedule: schedule
  };
};
