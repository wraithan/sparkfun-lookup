var request = require('request')

module.exports = lookup

function padNumber(number, pad) {
  var N = Math.pow(10, pad);
  return number < N ? ("" + (N + number)).slice(1) : "" + number
}

function lookup(options, cb) {
  var id = options.id
  var part = options.part
  if (!id && !part) {
    cb('id or part are required.')
    return
  } else if (id && part) {
    if (part.substr(-5) !== padNumber(parseInt(id, 10), 5)) {
      cb('id and part do not agree on id')
      return
    }
  } else if(!id && part) {
    id = part.substr(-5)
  }
  if (typeof(id) === 'string') {
    id = parseInt(id, 10)
  }
  var htmlUrl = 'https://www.sparkfun.com/products/' + id
    , jsonUrl = htmlUrl + '.json'
  request(jsonUrl, function(err, res, body) {
    if (err) {
      cb(err)
      return
    } else if (res.statusCode !== 200) {
      cb('got statusCode: '+ res.statusCode)
      return
    }
    var product = JSON.parse(body)
    if (part && product.sku.toUpperCase() !== part.toUpperCase()) {
      cb('got part: ' + product.sku.toUpperCase() + ' part ' + part + ' was requested.')
    }
    cb(null, product, htmlUrl, jsonUrl)
  })
}