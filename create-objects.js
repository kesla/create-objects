
var escapeKey = function(key) {
      return '\'' + key.replace(/\n/g, '\\n').replace(/'/g, '\\\'') + '\''
    }

  , createInit = function(keys) {
      var init = []
      keys.forEach(function(key, i) {
        if (typeof(key) === 'string')
          init.push(escapeKey(key) + ': input[' + i + ']')
      })
      return init
    }

  , createParser = function(keys) {
      var init = createInit(keys)
        , str = 'return {\n' + init + '\n}'

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
