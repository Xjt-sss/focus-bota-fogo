import state from "./state.js";
import * as el from './elements.js'
import { reset } from './action.js'
import { kitchenTimer } from "./sound.js";

export function countdow() {
  clearTimeout(state.countdowmId)
  if(!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

 if(seconds < 0) {
  seconds = 59
  minutes--
 }

 if(minutes < 0) {
  reset()
  kitchenTimer.play()
  return
 }

  state.countdowmId = setTimeout(() => countdow(), 1000)
}

export function updataDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.secunds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")

}