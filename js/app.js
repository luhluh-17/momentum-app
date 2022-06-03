import { displayTime, greetUser } from './clock.js'
import { animateModal, capitalizeWord, displayUser } from './helper.js'
import { quoteListener } from './quotes.js'
import { todoListener } from './todo.js'

const KEY_NAME = 'name'
const KEY_ACTIVITY = 'activity'

const modalName = document.querySelector('[data-modal-name]')
const inputName = document.querySelector('[data-input-name]')

const modalAct = document.querySelector('[data-modal-activity]')
const inputAct = document.querySelector('[data-input-activity]')

const main = document.querySelector('[data-main]')
const clockContainer = document.querySelector('[data-clock-container]')

const dailyActivity = document.querySelector('[data-daily-activity]')
const btnLogut = document.querySelector('[data-logout]')

let user = ''
let activity = ''

if (localStorage.getItem(KEY_NAME) === null) {
  modalName.showModal()
  animateModal(modalName, modalAct, showNext)
} else {
  user = localStorage.getItem(KEY_NAME)
  activity = localStorage.getItem(KEY_ACTIVITY)
  displayUser(user)
  showMain()
}

setInterval(() => {
  displayTime()
  greetUser()
}, 1000)

quoteListener()
todoListener()

btnLogut.addEventListener('click', () => {
  localStorage.clear()
  window.location.reload()
})

function showNext(next) {
  if (next === modalAct) {
    next.showModal()
    animateModal(next, null, showMain)
    user = capitalizeWord(inputName.value)
    localStorage.setItem(KEY_NAME, user)
    displayUser(user)
  }
}

function showMain() {
  activity = capitalizeWord(inputAct.value)
  if (localStorage.getItem(KEY_ACTIVITY) === null) {
    localStorage.setItem(KEY_ACTIVITY, activity)
  }
  dailyActivity.value = localStorage.getItem(KEY_ACTIVITY)
  main.setAttribute('data-show', '')
  clockContainer.setAttribute('data-show', '')
}
