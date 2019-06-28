# cnlg
Simplify and optimize your `console.log`.

## Getting Started
Install the package using `npm`:
```bash
npm install cnlg
```

## Usage
All parameters in `cnlg` must be passed like an object:
```Javascript
cnlg({a, b, c})
```

## Example
If you want print the variables like this:
```Javascript
var a = 'my string'
var b = 123
var c = 'my another string'

console.log('a: ' + a) // a: my string
console.log('b: ' + b) // b: 123
console.log('c: ' + c) // c: my another string
```

you can just do the same with `cnlg`:
```Javascript
const cnlg = require('cnlg')
var a = 'my string'
var b = 123
var c = 'my another string'

cnlg({a, b, c})
// a: my string
// b: 123
// c: my another string
```