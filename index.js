const whichWay = document.querySelector('#whichWay')
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


// function handleSubmit(ev) {
//   ev.preventDefault()
//   const ww = ev.target
//   const button = document.querySelector('button')
//   console.log(ww.elements)
// }

function handleSubmit2(ev) {
  ev.preventDefault()
  const ne = ev.target // should give us the object submitted
  const listOutput = document.querySelector('#listOutput')
  
  const newThing = {
    name: ne.item.value,
  }

 listOutput.appendChild(renderList(newThing))
 listOutput.prepend(renderList(newThing))
}






// whichWay.addEventListener('submit', handleSubmit)
newEntry.addEventListener('submit', handleSubmit2)