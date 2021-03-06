
var test = require('tap').test

  , createObjects = require('../create-objects')

test('simple', function(t) {
  var keys = [
        'foo', 'bar'
      ]
    , values = [
          [ 1, 'one' ]
        , [ 2, 'two' ]
        , [ 3, 'three' ]
        , [ 4, 'four']
      ]
    , parser = createObjects(keys)
    , actual = values.map(parser)
    , expected = [
          { foo: 1, bar: 'one' }
        , { foo: 2, bar: 'two' }
        , { foo: 3, bar: 'three' }
        , { foo: 4, bar: 'four' }
      ]

  t.deepEqual(actual, expected)
  t.end()
})

test('key with "\\n" chars', function(t) {
  var keys = [
        'foo\nbar'
      ]
    , values = [ 'hello' ]
    , actual = createObjects(keys)(values)
    , expected = {
        'foo\nbar': 'hello'
      }

  t.deepEqual(actual, expected)
  t.end()
})

test('key with "\'"-char', function(t) {
  var keys = [
        'foo\'bar'
      ]
    , values = [ 'hello' ]
    , actual = createObjects(keys)(values)
    , expected = {
        'foo\'bar': 'hello'
      }

  t.deepEqual(actual, expected)
  t.end()
})

test('key with other weird chars', function(t) {
  var keys = [
          '\t'
        , '\n'
        , '♥'
      ]
    , values = [ 1, 2, 3 ]
    , actual = createObjects(keys)(values)
    , expected = {
          '\t': 1
        , '\n': 2
        , '♥' : 3
      }

  t.deepEqual(actual, expected)
  t.end()
})

test('ignore none-string keys', function(t) {
  var keys = [
        null, 0, undefined, 'bing', false
      ]
    , values = [ 1, 2, 3, 4, 5 ]
    , actual = createObjects(keys)(values)
    , expected = {
          'bing': 4
      }

  t.deepEqual(actual, expected)
  t.end()
})
