/**
 * jstransformer-xml2js <https://github.com/tunnckoCore/jstransformer-xml2js>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var xml2js = require('xml2js');
var bluebird = require('bluebird');
var readFile = bluebird.promisify(fs.readFile);
var readFileSync = fs.readFileSync;

exports.name = 'xml2js';
exports.inputFormats = ['xml', 'xml2js'];
exports.outputFormat = 'json';

exports.renderAsync = function _renderAsync(str, opts) {
  var parseString = bluebird.promisify(xml2js.parseString);
  return parseString(str, opts).then(function(data) {
    return data;
  });
};
exports.renderFileAsync = function _renderFileAsync(filepath, opts) {
  return readFile(filepath, 'utf8').then(function(data) {
    return exports.renderAsync(data, opts);
  });
};
