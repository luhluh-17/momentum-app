import { setDisplay, capitalizeWord } from './helper.js'

const modal = document.querySelector('[data-modal-quote]')
const form = document.querySelector('[data-quote-form]')
let quoteIndex = 0

export const initEventListener = () => {
  const container = document.querySelector('[data-quote-container]')
  const btnRefresh = document.querySelector('[data-refresh-quote]')
  const btnMenu = document.querySelector('[data-menu-quote]')
  const btnClose = document.querySelector('[data-close-quote]')
  // TODO expand quote dialog
  const btnExpand = document.querySelector('[data-expand-quote]')

  const buttons = [btnRefresh, btnMenu]
  const SHOW = 'inline'
  const HIDE = 'none'

  setQuoteIndex()

  container.addEventListener('mouseover', () => setDisplay(buttons, SHOW))
  container.addEventListener('mouseout', () => setDisplay(buttons, HIDE))
  btnRefresh.addEventListener('click', setQuoteIndex)
  btnMenu.addEventListener('click', openMenu)
  btnClose.addEventListener('click', closeMenu)
  form.addEventListener('submit', submit)
}

// TODO Store in local storage
const addQuote = (quote, author) => {
  quotes.push(new Quote(capitalizeWord(quote), capitalizeWord(author)))
  displayQuote(quoteIndex, 'new')
}

const submit = () => {
  let quote = form.elements[0].value
  let author = form.elements[1].value
  addQuote(quote, author)
  // TODO create helper to clear only input[type='text']
  form.elements[0].value = ''
  form.elements[1].value = ''
}

const displayQuote = (curr, view = 'random') => {
  const quote = document.querySelector('[data-quote]')
  const author = document.querySelector('[data-author]')

  let index = 0
  if (view === 'random') {
    index = randomQuote(curr)
  } else if (view === 'new') {
    index = quotes.length - 1
  }

  quote.textContent = quotes[index].quote
  author.textContent = quotes[index].author

  return index
}

const openMenu = () => modal.showModal()
const closeMenu = () => modal.close()

const randomQuote = (curr) => {
  const arr = quotes.filter((item) => quotes.indexOf(item) !== curr)
  const randomQuote = arr[Math.floor(Math.random() * arr.length)]
  return quotes.indexOf(randomQuote)
}

const setQuoteIndex = () => {
  quoteIndex = displayQuote(quoteIndex)
}

class Quote {
  constructor(quote, author) {
    this.quote = quote.charAt(quote.length - 1) === '.' ? quote : `${quote}.`
    this.author = author === '' ? 'Unknown' : author
  }
}

const quotes = [
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
