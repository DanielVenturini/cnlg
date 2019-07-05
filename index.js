function vars(argsKeys) {
  Object.keys(argsKeys).forEach(function (key) {
    console.log(key + ': ' + JSON.stringify(argsKeys[key]))
  })
}

module.exports = function() {
  try {
    // when calls cnlg({var1, var2})
    // the Node.js converts {var1, var2} in {'0': {var1: 'value', var2: 'value2'}}
    keys = Object.keys(arguments)
    for(var mainKey in keys) {
      vars(arguments[mainKey])

      // doesn't print break line when the mainKey is the last
      if(mainKey != keys[keys.length-1])
        console.log()   // break line to more than one object: cnlg({k, b, g}, {k, b})
    }
  } catch (e) {
    console.log('Wrong call. Please, use \'cnlg({obj1, obj2})\'')
  }
}