var html = require('choo/html')
var x = require('xtend')

// var inputColor = require('../components/input-color')
var inputText = require('../components/input/text')
var inputCheckbox = require('../components/input/checkbox')
var inputRange = require('../components/input/range')
var inputTypography = require('../components/input-typography')

module.exports = view

function view (state, emit) {
  return html`
    <div>soon</div>
  `
  return html`
    <div class="${state.ui.mobile ? '' : 'panel-content'} x xw c12 bg-black tc-white sans usn">
      <div class="c12 p1px">
        <div class="tc-black bg-white brit psr z1">
          ${templateOption(state.options.design.font)}
        </div>
      </div>
      <div class="c12 p1px">
        <div class="tc-black bg-white">
          ${templateOption(state.options.design.scale)}
        </div>
      </div>
      <div class="c12 p1px">
        <div class="tc-black bg-white">
          ${templateOption(state.options.design.spacing)}
        </div>
      </div>
      <div class="c12 x">
        <div class="xx">
          <div class="c12 p1px">
            ${templateOption(state.options.design.colorBg)}
          </div>
          <div class="c12 p1px">
            ${templateOption(state.options.design.colorText)}
          </div>
        </div>
        <div class="x p1px" style="width: 9.2rem">
          <div class="x xac xjc c12 bg-white tc-black px1 curp" onclick=${handleInvertClick}>
            Invert
          </div>
        </div>
      </div>
      <div class="c12 p1px">
        <div class="tc-black bg-white line">
          ${templateOption(state.options.design.newTab)}
        </div>
      </div>
      <div class="c12">
        <div class="c12 p1px curp tac">
          <a href="/data/" class="line bg-white db bribr tc-black">
            Data
          </a>
        </div>
      </div>
      <div class="c12 p1px dn">
        <div class="tc-black bg-white brib line">
          ${templateOption(state.options.design.autoDismiss)}
        </div>
      </div>
    </div>
  `

  function templateOption (option) {
    switch (option.type) {
      case 'text':
        return h(inputText, {
          key: option.key,
          name: option.name,
          value: state.options.values[option.key],
          onChange: function (data) {
            emit('options:values', {
              key: option.key,
              value: data.value
            })
          }
        })
      case 'checkbox':
        return h(inputCheckbox,{
          key: option.key,
          name: option.name,
          value: state.options.values[option.key],
          onChange: function (data) {
            emit('options:values', {
              key: option.key,
              value: data.value
            })
          }
        })
      case 'color':
        var color = state.options.values[option.key]
        // return h(inputColor, {
        //   data: option,
        //   color: `rgb(${color.r}, ${color.g}, ${color.b})`,
        //   handleChange: function (value) {
        //     emit('options:values', {
        //       key: option.key,
        //       value: value.rgb
        //     })
        //   }
        // })
      case 'range':
        return h(inputRange, {
          name: option.name,
          value: state.options.values[option.key],
          showValue: option.showValue,
          onInput: function (data) {
            emit('options:values', {
              key: option.key,
              value: data.value
            })
          }
        })
      case 'typography':
        return h(inputTypography, {
          current: state.options.values.font,
          options: state.options.typography,
          handleCurrentClick: function () {
            emit('options:typography')
          },
          handleOptionClick: function (data) {
            emit('options:values', {
              key: option.key,
              value: data
            })
          }
        })
      default:
        return ''
    }
  }

  function handleInvertClick () {
    emit('options:invert')
  }
}
