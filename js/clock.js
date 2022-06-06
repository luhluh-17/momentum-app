export const displayTime = () => {
  const date = new Date()
  let hh = date.getHours()
  let mm = date.getMinutes()

  hh = hh === 0 ? 12 : hh
  hh = hh > 12 ? hh - 12 : hh
  hh = hh < 10 ? `0${hh}` : hh
  mm = mm < 10 ? `0${mm}` : mm

  document.querySelector('[data-clock]').textContent = `${hh}:${mm}`
}

export const greetUser = () => {
  const date = new Date()
  let hh = date.getHours()
  let greet = ''

  if (hh >= 4 && hh <= 11) {
    greet = 'Good morning'
    updateBackground('morning,sun')
  } else if (hh >= 12 && hh <= 16) {
    greet = 'Good afternoon'
    updateBackground('afternoon')
  } else if (hh >= 17 && hh <= 24) {
    greet = 'Good evening'
    updateBackground('dark nature')
  } else {
    greet = 'Hello'
    updateBackground('abstract')
  }

  document.querySelector('[data-greeting]').textContent = greet
}

const updateBackground = (tags) => {
  const bg = document.querySelector('[data-background]')
  let url = `url('https://source.unsplash.com/1600x900/?${tags}')`
  bg.style.backgroundImage = url
}
