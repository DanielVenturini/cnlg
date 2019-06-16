function vars(argsKeys) {
  Object.keys(argsKeys).forEach(function (key) {
    console.log(key + ': ' + argsKeys[key])
  })
}

module.exports = function() {
  try {
    // when calls cnlg({var1, var2})
    // the Node.js converts {var1, var2} in {'0': {var1: 'value', var2: 'value2'}}
    for(var mainKey in Object.keys(arguments)) {
      vars(arguments[mainKey])
      console.log()   // break line to more than one object: cnlg({k, b, g}, {k, b})
    }
  } catch (e) {
    console.log('Wrong call. Please, use \'cnlg({obj1, obj2})\'')
  }
}