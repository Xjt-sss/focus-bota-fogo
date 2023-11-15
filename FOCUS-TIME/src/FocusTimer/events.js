import { controls } from './elements.js'
import * as actions from './action.js'
import * as el from './elements.js'
import state from './state.js'
import { updataDisplay } from './time.js'
export function register () {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(    actions[action] != 'function') {
      return
    }

    actions[action]
  })
}

export function setMinutes() {
el.minutes.addEventListener('focus', () => {
  el.minutes.textContent = ""
})
el.minutes.onkeypress = (event) => /\d/.test(event.key)
el.minutes.addEventListener('blur', (event) => {
  let time = event.currentTarget.textContent
  time = time ? 60 : time
  state.minutes = time
  state.secunds = 0
  updataDisplay()
  el.minutes.removeAttribute('contenteditable')
})
}