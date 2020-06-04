const list = document.getElementById('list')
const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')

addButton.addEventListener('click', (event) => {
    const newlist = document.createElement('li')
    const newImage = document.createElement('img')
    const newspan = document.createElement('span')
    const number = list.childElementCount + 1
    newImage.src = "http://placehold.it/64x64"
    newImage.alt = "アイテム" + `${number}`
    newspan.textContent = `アイテム${number}`
    list.appendChild(newlist)
    newlist.appendChild(newImage)
    newlist.appendChild(newspan)
})

removeButton.addEventListener('click', (event) => {
    const number =list.childElementCount
    if (number > 0 ) {
        list.removeChild(list.lastElementChild)
    }
})