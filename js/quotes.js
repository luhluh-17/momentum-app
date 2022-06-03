import { clearForm, setDisplay, capitalizeWord } from './helper.js'

const KEY = 'quotes'
const modal = document.querySelector('[data-modal-quote]')
const form = document.querySelector('[data-quote-form]')
let quoteList = []
let quoteIndex = 0

export const quoteListener = () => {
  const container = document.querySelector('[data-quote-container]')
  const btnRefresh = document.querySelector('[data-refresh-quote]')
  const btnMenu = document.querySelector('[data-menu-quote]')
  const btnClose = document.querySelector('[data-close-quote]')
  // TODO expand quote dialog
  const btnExpand = document.querySelector('[data-expand-quote]')

  const buttons = [btnRefresh, btnMenu]
  const SHOW = 'inline'
  const HIDE = 'none'

  storeQuotes()
  getList()
  getRandomQuote()

  container.addEventListener('mouseover', () => setDisplay(buttons, SHOW))
  container.addEventListener('mouseout', () => setDisplay(buttons, HIDE))
  btnRefresh.addEventListener('click', getRandomQuote)
  btnMenu.addEventListener('click', openMenu)
  btnClose.addEventListener('click', closeMenu)
  form.addEventListener('submit', submit)
}

const getList = () => {
  quoteList = JSON.parse(localStorage.getItem(KEY))
  console.log(quoteList)
}

const storeQuotes = (mode = 'normal') => {
  if (mode === 'normal' && localStorage.getItem(KEY) === null) {
    localStorage.setItem(KEY, JSON.stringify(_quoteList))
  } else if (mode === 'force') {
    localStorage.setItem(KEY, JSON.stringify(quoteList))
  }
}

const getRandomQuote = () => (quoteIndex = displayQuote(quoteIndex))
const openMenu = () => modal.showModal()
const closeMenu = () => modal.close()

const submit = () => {
  let quote = form.elements[0].value
  let author = form.elements[1].value
  addQuote(quote, author)
  clearForm(form.elements)
}

const addQuote = (quote, author) => {
  const newQuote = new Quote(capitalizeWord(quote), capitalizeWord(author))
  quoteList.push(newQuote)
  storeQuotes('force')
  displayQuote(quoteIndex, 'new')
}

const displayQuote = (curr, view = 'random') => {
  const quote = document.querySelector('[data-quote]')
  const author = document.querySelector('[data-author]')

  let index = 0
  if (view === 'random') {
    const arr = quoteList.filter((item) => quoteList.indexOf(item) !== curr)
    const randomQuote = arr[Math.floor(Math.random() * arr.length)]
    index = quoteList.indexOf(randomQuote)
  } else if (view === 'new') {
    index = quoteList.length - 1
  }

  quote.textContent = quoteList[index].quote
  author.textContent = quoteList[index].author

  return index
}

class Quote {
  constructor(quote, author) {
    this.quote = quote.charAt(quote.length - 1) === '.' ? quote : `${quote}.`
    this.author = author === '' ? 'Unknown' : author
  }
}

const _quoteList = [
  new Quote(
    'If everyone is not special maybe you can be what you want to be.',
    'Mob Choir'
  ),
  new Quote(
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    'Robert Louis Stevenson'
  ),
  new Quote(
    'The future belongs to those who believe in the beauty of their dreams.',
    'Eleanor Roosevelt'
  ),
  new Quote(
    "Life is what happens when you're busy making other plans.",
    'John Lenon'
  ),
  new Quote(
    'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    'Mother Teresa'
  ),
]
