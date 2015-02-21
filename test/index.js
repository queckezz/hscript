
var exec = require('child_process').execSync
var Assert = require('assert')

describe('hscript', function () {
  describe('stdin', function () {
    it('convert to hyperscript', function (done) {
      var out = exec('echo "<div>text</div>" | node bin/hscript ')
      Assert.equal(out.toString(), 'h("div", [ "text" ])\n')
      done()
    })

    it('convert to html', function (done) {
      var out = exec('echo "h(\'div\', [\'text\'])" | node bin/hscript --html')
      Assert.equal(out.toString(), '<div>text</div>\n')
      done()
    })
  })

  describe('cli', function () {
    it('convert to hyperscript', function (done) {
      var out = exec('node bin/hscript test/fixtures/basic.html')
      Assert.equal(out.toString(), 'h("div", [ "text" ])\n')
      done()
    })

    it('convert to html', function (done) {
      var out = exec('node bin/hscript test/fixtures/basic.js')
      Assert.equal(out.toString(), '<div>text</div>\n')
      done()
    })
  })
})