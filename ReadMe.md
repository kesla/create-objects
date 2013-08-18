# create-objects[![build status](https://secure.travis-ci.org/kesla/create-objects.png)](http://travis-ci.org/kesla/create-objects)

Create objects from arrays of arrays

## Installation

```
npm install create-objects
```

## Example

```javascript
var createObjects = require('create-objects')

    // a parser is created by giving the constructor a list of keys
    // any none-strings are ignored
  , parse = createObjects([ null, 'foo', 'bar' ])

// will print out
//    object: { foo: 2, bar: 3 }
console.log('object:', parse([ 1, 2, 3 ]));
```

## Licence

Copyright (c) 2013 David Björklund

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

