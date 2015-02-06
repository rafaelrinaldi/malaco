'use strict';

/**
 * HTTP request helper.
 */

var config = require('./config'),
    format = require('util').format,
    log = require('debug')('request'),
    Q = require('q'),
    request = require('superagent');

function formatURL(url, options) {
  var url = url;

  options.forEach(function(option) {
    url = format(url, option);
  });

  return url;
}

function getHostURL(host) {
  return config.services.hosts[host];
}

module.exports = function(id, options) {
  var host,
      url,
      service = config.services[id],
      deferred = Q.defer();

  if(!service) {
    deferred.reject(new Error('Wrong service id'));
    return;
  }

  // Resolve service host
  host = getHostURL(service.host);

  // Resolve service URL
  url = host + (service.path || '');

  // Parse URL options if they exist
  if(options) {
    url = formatURL(url, options);
  }

  log('Making a request to service "%s" at "%s"', id, url);

  request
    .get(url)
    // Mocks an user agent to be able to get the data needed.
    .set('User-Agent', config['user-agent'])
    .end(function(error, response) {
      if(error) {
        log(error);
        deferred.reject(error);
      } else {
        deferred.resolve(response.text);
      }
    });

  return deferred.promise;
}
