const answer = document.querySelector('form#answer')
const newEntry = document.querySelector('form#newEntry')
const listOutput = document.querySelector('div#listOutput')
const uList = document.querySelector('ul#uList')

function handleFavorite(ev) {
  ev.preventDefault()
  const btn = ev.target
  const favID = btn.id + 'li'
  const elem = document.getElementById(favID)
  if (btn.value === 'false') {
    btn.style.backgroundColor = 'gold'
    btn.style.borderColor = 'gold'
    elem.style.backgroundColor = 'yellow'
    btn.value = true
  }
  else if (btn.value === 'true') {
    btn.style.backgroundColor = 'cornflowerblue'
    btn.style.borderColor = 'cornflowerblue'
    elem.style.backgroundColor = '#DDDDB7'
    btn.value = false
  }
}

function handleDelete(ev) {
  ev.preventDefault()
  const btn = ev.target
  const deleteID = btn.id + 'li'
  const elem = document.getElementById(deleteID)
  elem.remove()
}

function makeX(value) {
  const button = document.createElement('button')
  button.innerHTML = 'X'
  button.className = 'x'
  button.id = value
  button.addEventListener('click', handleDelete)
  return button
}

function makeO(value) {
  const button = document.createElement('button')
  button.innerHTML = 'O'
  button.className = 'o'
  button.id = value
  button.value = false
  button.addEventListener('click', handleFavorite)
  return button
}

function renderListItem(index, value) {
  const li = document.createElement('li')
  li.innerHTML = `${value}             `
  li.id = value + 'li'
  const oButton = makeO(value)
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

function handleSubmit(ev) {
  ev.preventDefault()
  const a = ev.target
  const listCat = a.category.value
  const newHeading = "The List of " + listCat
  document.querySelector('h1').textContent = newHeading
  document.querySelector('div#listInput').style.display = 'block'
}

answer.addEventListener('submit', handleSubmit)
newEntry.addEventListener('click', handleClick)