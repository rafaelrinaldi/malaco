'use strict';

/**
 * Malaco configuration settings.
 */

module.exports = {
  'services': {
    'hosts': {
      'metro': 'http://www.metro.sp.gov.br/sua-viagem/',
      'viaquatro': 'http://www.viaquatro.com.br/'
    },

    'get-lines': {
      'host': 'metro',
      'path': 'index.aspx'
    },

    'get-station': {
      'host': 'metro',
      'path': '%s/%s.aspx'
    },

    'get-status': {
      'host': 'viaquatro'
    }
  },
  'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0'
};
