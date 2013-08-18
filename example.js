
var createObjects = require('create-objects')

    // a parser is created by giving the constructor a list of keys
    // any none-strings are ignored
  , parse = createObjects([ null, 'foo', 'bar' ])

// will print out
//    object: { foo: 2, bar: 3 }
console.log('object:', parse([ 1, 2, 3 ]));
