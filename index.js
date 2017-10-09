var html = require('choo/html')
var choo = require('choo')

var wrapper = require('./src/containers/wrapper')
var app = choo()

// plugins
require('./src/plugins').forEach(plugin => app.use(plugin))

// // app
// app.route('/', wrapper(require('./src/templates/home')))
app.route('/', wrapper(function (state, emit) {
  return html`<div>hello</div>`
}))

// app.route('/reset', wrapper(require('./src/templates/reset')))

// // panel
// app.route('/panel', wrapper(require('./src/templates/panel')))
// app.route('/panel/:view', wrapper(require('./src/templates/panel')))
// app.route('/panel/:view/:id', wrapper(require('./src/templates/panel')))

// // data
// app.route('/data', wrapper(require('./src/templates/data')))
// app.route('/data/:command', wrapper(require('./src/templates/data')))

// dev
if (process.env.NODE_ENV === 'development') {
  
}

// start
if (module.parent) module.exports = app
else app.mount('body')