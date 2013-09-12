# sparkfun-lookup

Very simple library to get a product's data from sparkfun given an ID or part number.

```javascript

var lookup = require('sparkfun-lookup')

lookup({id: 97}, function(err, product, htmlUrl, jsonUrl) {
  if (err) {
    console.error(err)
    return
  }
  console.log('%s: %s', product.sku, product.name)
})
```
