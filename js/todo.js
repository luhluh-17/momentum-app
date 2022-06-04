import { saveData } from './helper.js'

const modal = document.querySelector('[data-modal-todo]')
const form = document.querySelector('[data-form-todo]')
const container = document.querySelector('[data-list-todo]')
const KEY_TODO = 'todo'
let todoList = []

export const todoListener = () => {
  const btnOpen = document.querySelector('[data-open-todo]')
  const btnClose = document.querySelector('[data-close-todo]')

  saveData(KEY_TODO, _todoList, todoList)
  getList()
  displayTodoList()

  btnOpen.addEventListener('click', openMenu)
  btnClose.addEventListener('click', closeMenu)
  form.addEventListener('submit', submit)
}

const getList = () => {
  todoList = JSON.parse(localStorage.getItem(KEY_TODO))
  console.log('TodoList', todoList)
}

const openMenu = () => modal.showModal()
const closeMenu = () => modal.close()

// TODO Add Scrollbar inside modal
const displayTodoList = () => {
  todoList.forEach((todo) => {
    createListItem(todo)
  })
}

const submit = () => {
  let activity = form.elements[0].value
  addTodo(activity)
  form.elements[0].value = ''
}

const addTodo = (activity) => {
  let todo = new Todo(activity)
  todoList.push(todo)
  saveData(KEY_TODO, _todoList, todoList, 'force')
  createListItem(todo)
}

// TODO Add eventlister to cb | add text-decor to label
const createListItem = (obj) => {
  const listItem = document.createElement('li')
  listItem.classList.add('flex-row')
  listItem.classList.add('fill-width')

  const div = document.createElement('div')
  div.append(createCheckbox(obj))
  div.append(createLabel(obj))

  listItem.append(div)
  listItem.append(createIconBtn())
  container.append(listItem)
}

const createLabel = (obj) => {
  let label = document.createElement('label')
  label.setAttribute('for', obj.activity)
  label.textContent = obj.activity
  return label
}

const createCheckbox = (obj) => {
  let cb = document.createElement('input')
  cb.setAttribute('type', 'checkbox')
  cb.setAttribute('id', obj.activity)
  return cb
}

const createIconBtn = () => {
  const btn = document.createElement('button')
  btn.classList.add('btn-icon')
  btn.setAttribute('data-close-todo', '')

  const icon = document.createElement('i')
  icon.classList.add('fa-solid')
  icon.classList.add('fa-trash')

  btn.append(icon)
  return btn
}

class Todo {
  constructor(activity, priority = 3) {
    this.activity = activity
    this.priority = priority
  }
}

const _todoList = [new Todo('Fix Code', 1)]
