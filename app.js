const addBtn = document.getElementById('add');
const inputData = document.querySelector('input');
const resBlock = document.querySelector('.result-block');

addBtn.addEventListener('click', () => {
    if (inputData.value === ''){
        return;
    }

    addDeleteElement(inputData.value);
    inputData.value = '';
})

function addDeleteElement(value){
    const li = document.createElement('li');
    const liText = document.createElement('p');
    const delBtn = document.createElement('span');

    liText.textContent = value;
    liText.setAttribute('title', value);
    liText.classList.add('text');

    delBtn.textContent = 'X';
    delBtn.setAttribute('title', 'Delete');
    delBtn.classList.add('delete');

    li.appendChild(liText);
    li.appendChild(delBtn);
    resBlock.appendChild(li);

    delBtn.addEventListener('click', () => {
        resBlock.removeChild(li);
    })
}
