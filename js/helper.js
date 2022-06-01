export const animateModal = (curr, next, myCallback) => {
  curr.addEventListener('close', () => {
    curr.setAttribute('closing', '')
    curr.addEventListener('animationend', () => {
      curr.close()
      curr.removeAttribute('closing')
    })
    // TODO: Ask what happens if callback has no param
    myCallback(next)
  })
}

export const capitalizeWord = (str) => {
  const arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join(' ')
}

export const displayUser = (name) => {
  const placeholders = document.querySelectorAll('[data-name]')
  placeholders.forEach((element) => (element.textContent = name))
}

export const setDisplay = (arr, value) => {
  arr.forEach((element) => (element.style.display = value))
}
