const newEntry = document.querySelector('#newEntry')

function renderListItem(index, value) {
  const li = document.createElement('li')
  li.innerHTML = `${value}`
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
  const ne = ev.target // should give us the object submitted
  const listOutput = document.querySelector('#listOutput')
  
  const newThing = {
    name: ne.item.value,
  }

 listOutput.appendChild(renderList(newThing))
}

newEntry.addEventListener('submit', handleSubmit)