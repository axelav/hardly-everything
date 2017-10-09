var html = require('choo/html')
var x = require('xtend')

var { intToRest } = require('../helpers/time')
var InputRange = require('../components/input/range')
var InputText = require('../components/input/text')
// var InputTags = require('../components/input/tags')

module.exports = view

function view (state, emit) {
  return html`
    <div>soon</div>
  `
  return html`
    <form
      autocomplete="off"
      class="x xw bg-black"
      onsubmit=${handleSubmit}
    >
      <div class="c12 p1px">
        ${h(InputText, {
          key: 'url',
          name: 'http://',
          value: state.staging.entry.url,
          style: 'brit',
          autofocus: true,
          onInput: function (data) {
            emit('staging:entry', {
              url: data.value
            })
          }
        })}
      </div>
      <div class="c12 p1px">
        ${h(InputText, {
          key: 'title',
          name: 'Title',
          value: state.staging.entry.title,
          onInput: function (data) {
            emit('staging:entry', {
              title: data.value
            })
          }
        })}
      </div>
      <div class="c12 x">
        <div class="xx p1px">
          <div class="fs1 c12 bg-white tc-black line">
            ${h(InputRange, {
              name: 'Rest',
              value: state.staging.entry.timeRange,
              valueShow: false,
              onInput: function (data) {
                emit('staging:entry', x(getTime(data.value), {
                  timeRange: data.value
                }))
              }
            })}
          </div>
        </div>
        <div class="c2 p1px">
          <input
            value=${state.staging.entry.duration}
            oninput=${e => emit('staging:entry', {
              timeRange: 0,
              duration: parseInt(e.target.value || 0)
            })}
            type="text"
            class="p0 c12 tac fs1 mono bg-white tc-black line"
          />
        </div>
        <div class="c2 p1px">
          <input
            value=${state.staging.entry.interval}
            oninput=${e => emit('staging:entry', {
              timeRange: 0,
              interval: e.target.value
            })}
            type="text"
            class="p0 c12 tac fs1 sans bg-white tc-black line"
          />
        </div>
      </div>
      <div class="c12 x">
        <div class="${state.staging.entry.id ? 'x c4' : 'dn'} p1px">
          <input
            name="delete"
            value="Delete"
            tabindex="-1"
            class="fs1 c12 tc-black bg-white sans bribl line"
            onclick=${e => remove(state.staging.entry.id)}
            type="button"
          />
        </div>
        <div class="xa p1px">
          <input
            type="submit"
            value="${!state.staging.entry.id ? 'Add' : 'Save'}"
            tabindex="-1"
            class="fs1 c12 bg-white tc-black sans fwb line ${state.staging.entry.id ? 'bribr' : 'brib'}"
          />
        </div>
      </div>
    </form>
  `

  function tags () {
    return html` 
      <div class="c12 p1px ${isTagsVisible() && isStepThree() ? 'db' : 'dn'}">
        <div class="bg-white oxs">
          ${h(InputTags, {
            key: 'tags',
            name: 'Tags',
            value: state.staging.entry.tags || [ ],
            onChange: function (data) {
              emit('staging:entry', {
                tags: data.value
              })
            }
          })}
        </div>
      </div>
    `
  }

  function getTime (value) {
    return intToRest({
      value: value
    })
  }

  function handleSubmit (event) {
    if (state.staging.entry.id) {
      emit('entries:update', state.staging.entry)
    } else {
      emit('entries:add', state.staging.entry)
    }

    emit('ui:panel', { view: '' })
    event.preventDefault()
  }

  function reset () {
    emit('staging:reset')
    emit('pushState', '/')
  }

  function remove (id) {
    reset()
    emit('ui:panel', { view: '' })
    emit('entries:remove', { id: id })
  }

  function isTagsVisible () {
    return state.features && state.features.tags
  }

  function isStepTwo () {
    return state.staging.entry.url
  }

  function isStepThree () {
    return state.staging.entry.url && state.staging.entry.title
  }
}