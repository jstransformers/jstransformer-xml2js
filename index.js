'use strict'

var parseString = require('xml2js').parseString
var Promise = require('promise')
var extend = require('extend-shallow')

exports.name = 'xml2js'
exports.outputFormat = 'json'

exports.renderAsync = function (str, options, locals) {
  return new Promise(function (resolve, reject) {
    var opts = extend({}, options, locals, {async: true})
    parseString(str, opts, function (err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.stringify(result))
      }
    })
  })
}
