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

  greetUser('User')
}

function greetUser(user) {
  const date = new Date()
  let hh = date.getHours()

  let greet = 'Hello'

  if (hh >= 6 && hh <= 11) {
    greet = 'Good morning'
  } else if(hh >= 12 && hh <= 16) {
    greet = 'Good afternoon'
  } else if(hh >= 17 && hh <= 24) {
    greet = 'Good evening'
  }

  document.querySelector('[data-greeting]').textContent = greet
  document.querySelector('[data-name]').textContent = user
}

setInterval(currentTime, 1000)

