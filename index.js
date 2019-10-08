const form = document.querySelector('form')
form.addEventListener('submit', addToDo)

function addToDo(event) {
    event.preventDefault()
    const newItem =  document.createElement('li') 
    const input = document.querySelector('#item')
    newItem.innerText = input.value
    newItem.addEventListener('click', completeToDo)

    const button = document.createElement('button')
    button.innerText = 'X'
    button.addEventListener('click', removeToDo)
    newItem.append(button)

    const list = document.querySelector('ul')
    list.appendChild(newItem)
}

function removeToDo() {
    event.target.parentNode.remove()
}

function completeToDo() {
    const checked = event.target.getAttribute('aria-checked')
    if (checked === 'true') {
        event.target.setAttribute('aria-checked', 'false')
    } else {
        event.target.setAttribute('aria-checked', 'true')
    }
}