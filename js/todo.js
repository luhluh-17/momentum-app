const modal = document.querySelector('[data-modal-todo]')
const form = document.querySelector('[data-form-todo]')

export const todoListener= () => {
  const btnOpen = document.querySelector('[data-open-todo]')
  const btnClose = document.querySelector('[data-close-todo]')
  

  btnOpen.addEventListener('click', openMenu)
  btnClose.addEventListener('click', closeMenu)
}

const openMenu = () => modal.showModal()
const closeMenu = () => modal.close()