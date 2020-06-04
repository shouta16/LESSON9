

const ul = document.querySelector('#list');
document.getElementById('add').addEventListener('click',() => {
    const li = document.createElement('li');
    ul.appendChild(li); //ulの中にliを追加//
    const query = document.querySelectorAll('li') //？//
    li.textContent = `アイテム ${query.length}`;
});

document.getElementById('remove').addEventListener('click', () => {
    const li = document.querySelectorAll('li');
    if (li.length === 0) {
        return;
    }
    ul.removeChild(li[li.length - 1]); //?//
});


