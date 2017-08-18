var html = require('choo/html')
var Nanocomponent = require('nanocomponent')

module.exports = Text

function Text () {
  if (!(this instanceof Text)) return new Text()
  this.value = { }
  Nanocomponent.call(this)
}

Text.prototype = Object.create(Nanocomponent.prototype)

Text.prototype.createElement = function (state, emit) {
  this.id = state.id
  this.value = state.value
  this.key = state.key

  return html`
    <div>
      <input
        name="${state.key}"
        class="input"
        type="text"
        value="${state.value || ''}"
        oninput=${emit ? onInput : ''}
        onfocus=${emit ? onFocus : ''}
      />
    </div>
  `

  function onInput (event) {
    emit('input', event.target.value)
  }

  function onFocus (event) {
    emit('focus', event.target.value)
  }
}

Text.prototype.update = function (state) {
  // if (state.value !== this.value) {
    this.value = state.value
    // this.element.querySelector('input').value = state.value
  // }
  return true
}

function text (state, emit) {
  return html`
    <input
      name="${state.key}"
      class="c12"
      type="text"
      value="${state.value || ''}"
      oninput=${emit ? onInput : ''}
      onfocus=${emit ? onFocus : ''}
    />
  `

  function onInput (event) {
    emit('input', event.target.value)
  }

  function onFocus (event) {
    emit('focus', event.target.value)
  }
}
