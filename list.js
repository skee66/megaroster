{
  const personForm = document.querySelector('form')

  const renderListItem = (name, value, person) => {
    const li = document.createElement('li')
    li.innerHTML = `${name}: ${value} `
    //adding button
    const button = document.createElement('button')
    button.textContent = 'Delete'
    button.setAttribute('type', 'delete')
    li.appendChild(button)
    button.addEventListener('click', () => {
      li.parentNode.removeChild(li)
    })

    const promote = document.createElement('button')
    promote.textContent = ' Promote'
    promote.setAttribute('type', 'promote')
    li.appendChild(promote)
    promote.addEventListener('click', () => {
      li.style.border = '2px solid yellow'
    })
    return li
  }

  const renderList = (person) => {
    const list = document.getElementsByTagName('ul')[0]
    let li = renderListItem(Object.keys(person)[0], person.name, person)
    //list.appendChild(li)
    list.insertBefore(li, list.childNodes[0])
    return list
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const person = {
      name: form.personName.value,
    }

    const list = renderList(person)

    details.appendChild(list)
  }

  personForm.addEventListener('submit', handleSubmit)
}