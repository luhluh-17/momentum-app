const modalName = document.querySelector('[data-modal-name]')
const inputName = document.querySelector('[data-input-name]')

const modalAct = document.querySelector('[data-modal-activity]')
const inputAct = document.querySelector('[data-input-activity]')

let user, activity

window.onload = () => modalName.showModal()
closeModal(modalName, modalAct)
setInterval(currentTime, 1000)

function closeModal(curr, next) {
  curr.addEventListener('close', () => {
    curr.setAttribute('data-closing', '')
    curr.addEventListener('animationend', () => {
      curr.close()
      curr.removeAttribute('data-closing')
    })
    if (next === modalAct) {
      next.showModal()
      closeModal(modalAct, null)
      user = capitalizeWord(inputName.value)
    } else {
      activity = capitalizeWord(inputAct.value)
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

function greetUser(name) {
  const date = new Date()
  let hh = date.getHours()

  let greet = 'Hello'

  if (hh >= 6 && hh <= 11) {
    greet = 'Good morning'
  } else if (hh >= 12 && hh <= 16) {
    greet = 'Good afternoon'
  } else if (hh >= 17 && hh <= 24) {
    greet = 'Good evening'
  }

  document.querySelector('[data-greeting]').textContent = greet
  document.querySelector('[data-name]').textContent = name
}
