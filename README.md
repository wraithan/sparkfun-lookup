# sparkfun-lookup

Very simple library to get a product's data from sparkfun given an ID or part number.

```javascript
var lookup = require('sparkfun-lookup')

lookup({id: 97, part: 'COM-00097'}, function(err, product, htmlUrl, jsonUrl) {
  if (err) {
    console.error(err)
    return
  }
  console.log('%s: %s', product.sku, product.name)
})
```

You only need `id` or `part`, if both are provided, it makes sure they reference the same part.

If you provide `part` it will check `product.sku` against it to make sure that it is actually the one you meant.