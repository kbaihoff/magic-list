const newEntry = document.querySelector('#newEntry')

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
  console.log("delete")
}

function makeX() {
  const button = document.createElement('button')
  button.innerHTML = 'X'
  button.addEventListener('click', handleDelete)
  return button
}

function makeO(value) {
  const button = document.createElement('button')
  button.innerHTML = 'o'
  button.id = value // The button id is the name of the item
  button.value = false
  button.addEventListener('click', handleFavorite)
  return button
}

function renderListItem(index, value) {
  const li = document.createElement('li')
  li.innerHTML = `${value}             `
  const oButton = makeO(value)
  const xButton = makeX()
  li.appendChild(oButton)
  li.appendChild(xButton)
  return li
}

function renderList(data) {
  const ul = document.createElement('ul')
  Object.keys(data).map(function(index) {
    const li = renderListItem(index, data[index])
    ul.appendChild(li)
  })
  return ul
}

function handleClick(ev) {
  ev.preventDefault()
  const ne = ev.target // should give us the object was CLICKED
  const listOutput = document.querySelector('#listOutput')
  const itemName = newEntry.item.value
  const newThing = {
    name: itemName,
  }

  if (ne.id === 'reg') {
    listOutput.appendChild(renderList(newThing))
  }
  else if (ne.id === 'irreg') {
    listOutput.prepend(renderList(newThing))
  }
}

newEntry.addEventListener('click', handleClick)