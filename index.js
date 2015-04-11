/**
 * jstransformer-xml2js <https://github.com/jstransformers/jstransformer-xml2js>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var xml2js = require('xml2js');
var bluebird = require('bluebird');

exports.name = 'xml2js';
exports.inputFormats = ['xml', 'xml2js'];
exports.outputFormat = 'json';

exports.renderAsync = function _renderAsync(str, opts) {
  var parseString = bluebird.promisify(xml2js.parseString);
  return parseString(str, opts).then(function(data) {
    return JSON.stringify(data);
  });
};
