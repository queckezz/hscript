
# hscript

[![NPM version][npm-image]][npm-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]

Cli for converting html to hyperscript and the other way around.

## Installation

```sh
$ npm install -g hscript
```

## Usage

```sh
$ hscript index.html
# -> h('div', ['text'])
```

```sh
$ hscript index.js
# -> <div>text<div/>
```

### Read from `stdin`

```sh
$ echo "<div>text<div/>" | hscript
# -> h('div', ['text'])
```

```sh
$ echo "h('div', ['text'])" | hscript --html
# -> <div>text<div/>
```

## Run tests

```
npm test
```

## License

[MIT][license-url]

[npm-image]: https://img.shields.io/npm/v/hscript.svg?style=flat-square
[npm-url]: https://npmjs.org/package/hscript

[david-image]: http://img.shields.io/david/queckezz/hscript.svg?style=flat-square
[david-url]: https://david-dm.org/queckezz/hscript

[license-image]: http://img.shields.io/npm/l/hscript.svg?style=flat-square
[license-url]: ./license

[travis-image]: https://travis-ci.org/queckezz/hscript.png
[travis-url]: https://travis-ci.org/queckezz/hscript