const newEntry = document.querySelector('form#newEntry')
const listOutput = document.querySelector('div#listOutput')
const uList = document.querySelector('ul#uList')

function handleFavorite(ev) {
  ev.preventDefault()
  const btn = ev.target
  if (btn.value === 'false') {
    btn.style.backgroundColor = 'blue'
    btn.value = true
  }
  else if (btn.value === 'true') {
    btn.style.backgroundColor = null
    btn.value = false
  }
}

function handleDelete(ev) {
  ev.preventDefault()
  const btn = ev.target
  const elem = document.getElementById(btn.id)
  elem.remove()
}

function makeX(value) {
  const button = document.createElement('button')
  button.innerHTML = 'X'
  button.id = value
  button.addEventListener('click', handleDelete)
  return button
}

function makeO() {
  const button = document.createElement('button')
  button.innerHTML = 'o'
  button.value = false
  button.addEventListener('click', handleFavorite)
  return button
}

function renderListItem(index, value) {
  const li = document.createElement('li')
  li.innerHTML = `${value}             `
  li.id = value
  const oButton = makeO()
  const xButton = makeX(value)
  li.appendChild(oButton)
  li.appendChild(xButton)
  return li
}

function renderList(data, id) {
  Object.keys(data).map(function(index) {
    const li = renderListItem(index, data[index])
    if (id === 'reg') {
      uList.appendChild(li)
    }
    else if (id === 'irreg') {
      uList.prepend(li)
    }
  })
  return uList
}

function handleClick(ev) {
  ev.preventDefault()
  const ne = ev.target // should give us the object was CLICKED
  const itemName = newEntry.item.value
  const newThing = {
    name: itemName,
  }
  listOutput.appendChild(renderList(newThing, ne.id))
}

newEntry.addEventListener('click', handleClick)