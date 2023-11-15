import state from "./state.js"
import * as events from './events.js'
import * as timer from './time.js'
export function start(minutes, seconds) {
  state.minutes = minutes
  state.secunds = seconds
  timer.updateDisplay()
  events.registeContruls()
  events.setMinutes()
}