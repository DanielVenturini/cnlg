# cnlg
Simplify and optimize your `console.log`.

## Getting Started
Install the package using `npm`:

```bash
npm install cnlg --save-dev
```

## Usage
All parameters in `cnlg` must be passed like an object:

```javascript
cnlg({a, b, c})
```

## Example
If you want print the variables like this:

```javascript
var a = 'my string'
var b = 123
var c = 'my another string'

// slowly code
console.log('a: ' + a) // a: my string
console.log('b: ' + b) // b: 123
console.log('c: ' + c) // c: my another string
```

you can just do the same with `cnlg`:

```javascript
const cnlg = require('cnlg')
var a = 'my string'
var b = 123
var c = 'my another string'

cnlg({a, b, c})
// a: my string
// b: 123
// c: my another string
```

you also can break lines between the variables:

```javascript
cnlg({a, b}, {c})
// a: my string
// b: 123
//
// c: my another string
```

## Compatibility
It runs on

| Node | Works |
|---|---|
| v0.x - v1.x | :warning: |
| v2.x - latest (v12) | :heavy_check_mark: |

It doesn't work in Node.Js 0.x and io.js 1.x because it expects a key followed by a mapping:

```javascript
cnlg({a:a, b:b, c:c})
```
