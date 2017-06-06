const newEntry = document.querySelector('#newEntry')

function renderListItem(index, value) {
  const li = document.createElement('li')
  const button = document.createElement('button')
  
  li.innerHTML = `${value}             `
  button.innerHTML = 'o'
  button.id = value
  li.appendChild(button)
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


function handleSubmit(ev) {
  ev.preventDefault()
  const ne = ev.target // should give us the object was CLICKED
  const listOutput = document.querySelector('#listOutput')
  const itemName = newEntry.item.value
 
  if (ne.id === 'reg') {
    const newThing = {
      name: itemName,
    }
    listOutput.appendChild(renderList(newThing))
  }
  else if (ne.id === 'irreg') {
    const newThing = {
      name: itemName,
    }
    listOutput.prepend(renderList(newThing))
  }
}

newEntry.addEventListener('click', handleSubmit)