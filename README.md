[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/ayak.svg)](https://travis-ci.org/indatawetrust/ayak)

# ayak
Minimal event router solution

#### install
```
npm i ayak -S
```
#### sample
```js
const ayak = require('ayak')

ayak('string').on({
  upper: (name, tick) => {
    tick(name.toUpperCase())
  },
  lower: (name, tick) => {
    tick(name.toLowerCase())
  }
})

ayak('string').emit('upper', "javascript").then(console.log) // JAVASCRIPT
ayak('string').emit('lower', "JAVASCRIPT").then(console.log) // javascript
```
