'use strict'

const parseString = require('xml2js').parseString
const extend = require('extend-shallow')

exports.name = 'xml2js'
exports.outputFormat = 'json'

exports.renderAsync = function (str, options, locals) {
  return new Promise((resolve, reject) => {
    const opts = extend({}, options, locals, {async: true})
    parseString(str, opts, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.stringify(result))
      }
    })
  })
}
