export const displayTime = () => {
  const date = new Date()
  let hh = date.getHours()
  let mm = date.getMinutes()

  let session = hh < 12 ? 'am' : 'pm'
  hh = hh === 0 ? 12 : hh
  hh = hh > 12 ? hh - 12 : hh
  mm = mm < 10 ? `0${mm}` : mm

  document.querySelector('[data-clock]').textContent = `${hh}:${mm} ${session}`
}

export const greetUser = () => {
  const date = new Date()
  let hh = date.getHours()

  let greet = ''

  if (hh >= 4 && hh <= 11) {
    greet = 'Good morning'
  } else if (hh >= 12 && hh <= 16) {
    greet = 'Good afternoon'
  } else if (hh >= 17 && hh <= 24) {
    greet = 'Good evening'
  } else {
    greet = 'Hello'
  }

  document.querySelector('[data-greeting]').textContent = greet
}
