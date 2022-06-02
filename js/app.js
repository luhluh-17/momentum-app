import { displayTime, greetUser } from './clock.js'
import { animateModal, capitalizeWord, displayUser } from './helper.js'
import { initEventListener } from './quotes.js'

const modalName = document.querySelector('[data-modal-name]')
const inputName = document.querySelector('[data-input-name]')

const modalAct = document.querySelector('[data-modal-activity]')
const inputAct = document.querySelector('[data-input-activity]')

const main = document.querySelector('[data-main]')

const dailyActivity = document.querySelector('[data-daily-activity]')

let user = ''
let activity = ''

// TODO: Remove Debug Mode
const debugMode = true
if (debugMode) {
  main.setAttribute('data-show', '')
  user = 'Debug Mode'
  displayUser(user)
} else {
  window.onload = () => modalName.showModal()
  animateModal(modalName, modalAct, showNext)
}

setInterval(() => {
  displayTime()
  greetUser()
}, 1000)

initEventListener()

function showNext(next) {
  if (next === modalAct) {
    next.showModal()
    animateModal(next, null, showMain)
    // TODO: Store user into local storage
    user = capitalizeWord(inputName.value)
    displayUser(user)
  }
}

function showMain() {
  activity = capitalizeWord(inputAct.value)
  dailyActivity.value = activity
  main.setAttribute('data-show', '')
}
