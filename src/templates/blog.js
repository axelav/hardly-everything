var html = require('choo/html')

var containerContent = require('../containers/content')
var entryBlog = require('../components/entry-blog')
var format = require('../components/format')

module.exports = view

function view (state, emit) {
  return containerContent(state, emit, content(state, emit))
}

function content (state, emit) {
  var entries = state.page()
    .children()
    .visible()
    .sortBy('date', 'desc')
    .toArray()

  return html`
    <div class="fs1 lh1-5 xx x xdc xjc xac bb1-lighter">
      ${createEntries()}
    </div>
  `

  function createEntries () {
    return entries
      .map(entryBlog)
      .map(function (children) {
        return html`
          <div class="w100 bt1-lighter py1">${children}</dev>
        `
      })
  }
}

