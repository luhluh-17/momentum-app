import { setDisplay } from './helper.js'

let quoteIndex = 0

const displayQuote = (curr) => {
  const quote = document.querySelector('[data-quote]')
  const author = document.querySelector('[data-author]')

  let index = randomQuote(curr)

  quote.textContent = quotes[index].quote
  author.textContent = quotes[index].author

  return index
}

const openMenu = () => {
  alert('Menu')
}

const randomQuote = (curr) => {
  console.log('CurrentIndex: ', curr)
  const arr = quotes.filter((item) => quotes.indexOf(item) !== curr)
  const randomQuote = arr[Math.floor(Math.random() * arr.length)]
  console.log('NewIndex: ', quotes.indexOf(randomQuote))
  return quotes.indexOf(randomQuote)
}

const setQuoteIndex = () => {
  quoteIndex = displayQuote(quoteIndex)
}

export const initEventListener = () => {
  const container = document.querySelector('[data-quote-container]')
  const btnRefresh = document.querySelector('[data-refresh-quote]')
  const btnMenu = document.querySelector('[data-menu-quote]')

  const buttons = [btnRefresh, btnMenu]
  const INLINE = 'inline'
  const NONE = 'none'

  setQuoteIndex()

  container.addEventListener('mouseover', () => setDisplay(buttons, INLINE))
  container.addEventListener('mouseout', () => setDisplay(buttons, NONE))
  btnRefresh.addEventListener('click', setQuoteIndex)
  btnMenu.addEventListener('click', openMenu)
}

class Quotes {
  constructor(quote, author) {
    this.quote = quote
    this.author = author
  }
}

const quotes = [
  new Quotes(
    'If everyone is not special maybe you can be what you want to be.',
    'Mob Choir'
  ),
  new Quotes(
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    'Robert Louis Stevenson'
  ),
  new Quotes(
    'The future belongs to those who believe in the beauty of their dreams.',
    'Eleanor Roosevelt'
  ),
  new Quotes(
    "Life is what happens when you're busy making other plans.",
    'John Lenon'
  ),
  new Quotes(
    'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    'Mother Teresa'
  ),
]
