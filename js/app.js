const modalName = document.querySelector('[data-modal-name]')
const inputName = document.querySelector('[data-input-name]')

const modalAct = document.querySelector('[data-modal-activity]')
const inputAct = document.querySelector('[data-input-activity]')

const main = document.querySelector('[data-main]')

const dailyActivity = document.querySelector('[data-daily-activity]')

let user, activity

// TODO: Remove Debug Mode
const debugMode = true
if (debugMode) {
  main.setAttribute('data-show', '')
  user = 'Debug Mode'
  displayUser(user)
} else {
  window.onload = () => modalName.showModal()
  closeModal(modalName, modalAct)
}

setInterval(currentTime, 1000)

function closeModal(curr, next) {
  curr.addEventListener('close', () => {
    curr.setAttribute('closing', '')
    curr.addEventListener('animationend', () => {
      curr.close()
      curr.removeAttribute('closing')
    })
    if (next === modalAct) {
      next.showModal()
      closeModal(next, null)
      user = capitalizeWord(inputName.value)
      displayUser(user)
    } else {
      activity = capitalizeWord(inputAct.value)
      dailyActivity.value = activity
      main.setAttribute('data-show', '')
    }
  })
}

function capitalizeWord(str) {
  const arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join(' ')
}

function displayUser(name) {
  let placeholders = document.querySelectorAll('[data-name]')
  placeholders.forEach((element) => {
    element.textContent = name
  })
}

function currentTime() {
  const date = new Date()
  let hh = date.getHours()
  let mm = date.getMinutes()

  let session = hh < 12 ? 'am' : 'pm'
  hh = hh === 0 ? 12 : hh
  hh = hh > 12 ? hh - 12 : hh
  mm = mm < 10 ? `0${mm}` : mm

  let time = `${hh}:${mm} ${session}`
  document.querySelector('[data-clock]').textContent = time

  greetUser(user)
}

function greetUser() {
  const date = new Date()
  let hh = date.getHours()

  let greet = 'Hello'

  if (hh >= 4 && hh <= 11) {
    greet = 'Good morning'
  } else if (hh >= 12 && hh <= 16) {
    greet = 'Good afternoon'
  } else if (hh >= 17 && hh <= 24) {
    greet = 'Good evening'
  }

  document.querySelector('[data-greeting]').textContent = greet
}
