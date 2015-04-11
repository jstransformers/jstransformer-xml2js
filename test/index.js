/**
 * jstransformer-xml2js <https://github.com/jstransformers/jstransformer-xml2js>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var test = require('assertit');
var transformer = require('jstransformer');
var transform = transformer(require('../index'));

test('should render xml string asynchronously, (promise)', function(done) {
  var fixture = '<?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title>Example Feed</title></feed>';
  var promise = transform.renderAsync(fixture);

  promise.then(function(actual) {
    actual = JSON.parse(actual.body);
    test.deep.equal(actual.feed.title, ['Example Feed']);
    done();
  });
});

test('should render xml file asynchronously (promise)', function(done) {
  var promise = transform.renderFileAsync('./test/fixture.xml');

  promise.then(function(actual) {
    actual = JSON.parse(actual.body);
    test.ok(actual);
    test.deep.equal(actual['sdk:source']['sdk:revision'], ['2'])
    done();
  });
});
