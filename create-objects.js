
var escapeKey = function(key) {
      return key.replace(/\n/g, '\\n').replace(/'/g, '\\\'')
    }

  , createParser = function(keys) {
      var str = 'return {\n' +
        keys.map(function(key, i) {
          if (key === null || key === undefined)
            return null
          key = key.toString()

          return '  \'' + escapeKey(key) + '\': input[' + i + ']'
        }).filter(Boolean).join(', \n') +
        '\n}'

      return new Function('input', str)
    }

  , CreateObjects = function(keys) {
      this.parser = createParser(keys)
    }

module.exports = function(keys) {
  var create = new CreateObjects(keys)
  return function(values) {
    return create.parser(values)
  }
}
