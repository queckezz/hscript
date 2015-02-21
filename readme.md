
# hscript

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