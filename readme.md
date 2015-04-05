## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> XML support for JS Transformers, transform XML to JSON. Using `xml2js`

## Install
```
npm i --save jstransformer-xml2js
npm test
```


## Usage
> For more use-cases see the [tests](./test/index.js)

```js
var xml = require('jstransformer')(require('jstransformer-xml'));
var opts = {};

var fixture = '<?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title>Example Feed</title></feed>';

var promise = xml.renderAsync(fixture, opts);
promise.then(function(data) {
  console.log(data);
  //=> { feed: 
   { '$': { xmlns: 'http://www.w3.org/2005/Atom' },
     title: [ 'Example Feed' ] } }
});

var promise = xml.renderFileAsync('./path/to/config.xml', opts);
promise.then(function(data) {
  console.log(data);
  //=> { feed: 
   { '$': { xmlns: 'http://www.w3.org/2005/Atom' },
     title: [ 'Example Feed' ] } }
});

```

## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [JSTransformers][jstransformers-url], [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/jstransformer-xml2js
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-xml2js.svg?style=flat&label=jstransformer-xml2js

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-xml2js?branch=master
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-xml2js.svg?style=flat

[license-url]: https://github.com/jstransformers/jstransformer-xml2js/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-xml2js
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-xml2js.svg?style=flat

[daviddm-url]: https://david-dm.org/jstransformers/jstransformer-xml2js
[daviddm-img]: https://img.shields.io/david/jstransformers/jstransformer-xml2js.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/jstransformers/jstransformer-xml2js/graphs/contributors
[jstransformers-url]: https://github.com/jstransformers

***

_Proudly generated by [docks(1)](https://github.com/tunnckoCore), April 5, 2015_