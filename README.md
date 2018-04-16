# jstransformer-xml2js

[xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-xml2js/master.svg)](https://travis-ci.org/jstransformers/jstransformer-xml2js)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-xml2js/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-xml2js)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-xml2js/master.svg)](http://david-dm.org/jstransformers/jstransformer-xml2js)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-xml2js.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-xml2js.svg)](https://www.npmjs.org/package/jstransformer-xml2js)

## Installation

    npm install jstransformer-xml2js

## API

```js
var xml = require('jstransformer')(require('jstransformer-xml'));
var opts = {};

var fixture = '<?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title>Example Feed</title></feed>';

var promise = xml.renderAsync(fixture, opts);
promise.then(function(data) {
  console.log(JSON.parse(data.body));
  //=> { feed:
  // { '$': { xmlns: 'http://www.w3.org/2005/Atom' },
  //   title: [ 'Example Feed' ] } }
});

var promise = xml.renderFileAsync('./path/to/config.xml', opts);
promise.then(function(data) {
  console.log(JSON.parse(data.body));
  //=> { feed:
  // { '$': { xmlns: 'http://www.w3.org/2005/Atom' },
  //   title: [ 'Example Feed' ] } }
});
```

## License

MIT
