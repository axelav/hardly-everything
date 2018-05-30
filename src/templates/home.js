var Panel = require('../containers/panel-container')
var EntryNavigation = require('../containers/entry-navigation')
var EntryList = require('../containers/entry-list')

module.exports = view

function view (state, emit) {
  var panelProps = {
    isHoverActive: true && !state.ui.mobile,
    view: state.ui.panel.view
  }

  // hide if nothing to load
  if (!state.app.loaded) {
    return ''
  }

  // all
  if (
      state.route === 'all' &&
      !state.ui.entriesViewAll
    ) {
    emit('ui:update', { entriesViewAll: true })
  }

  // non all
  if (
    state.route !== 'all' &&
    state.ui.entriesViewAll &&
    !state.search.term
  ) {
    emit('ui:update', { entriesViewAll: false })
  }

  // show the entry list if we’re logged in
  var content = EntryList(state, emit)

  return [
    Panel(state, panelProps, emit),
    content,
    EntryNavigation(state, emit)
  ]
}
