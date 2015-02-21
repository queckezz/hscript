
# hscript

Cli for converting `html <-> hyperscript`.

## Installation

```sh
$ npm install hscript
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