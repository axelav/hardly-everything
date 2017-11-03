var choo = require('choo')
var css = require('sheetify')

var wrapper = require('./containers/wrapper')
var app = choo()

require('./design')

// plugins
require('./plugins').forEach(plugin => app.use(plugin))

// app
app.route('/', wrapper(require('./templates/home')))
app.route('/reset', wrapper(require('./templates/reset')))

// panel
app.route('/panel', wrapper(require('./templates/panel')))
app.route('/panel/:view', wrapper(require('./templates/panel')))
app.route('/panel/:view/:id', wrapper(require('./templates/panel')))

// data
app.route('/data', wrapper(require('./templates/data')))
app.route('/data/:command', wrapper(require('./templates/data')))

// start
if (module.parent) module.exports = app
else app.mount('body')