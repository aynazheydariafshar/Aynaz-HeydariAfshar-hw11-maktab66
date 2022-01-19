const spanOne = document.querySelector('.span-one span');
const todoList = document.querySelector('.content ul');
spanOne.innerText = document.querySelectorAll('.list-item input[type="checkbox"]').length;

//build change theme when click
document.querySelector('#inputTheme').addEventListener('click' , () => {
    document.querySelector('body').classList = [inputTheme.checked ? 'theme-light' : 'theme-dark']
});

//add item for list
const addNewItem = document.querySelector('#addItem');
addNewItem.addEventListener('keypress' , (event)=>{
    if(event.key === "Enter" && addNewItem.value !== ""){
        newItemFunc(addNewItem.value);
        addNewItem.value = '';
    }
});

function newItemFunc(input) {
    const newLI = document.createElement('li');
    newLI.classList.add('contineir');
    
    newLI.innerHTML = `
        <label class="list-item">
        <input type="checkbox" name="todoItem">
        <span class="check-mark"></span>
        <span class="input">${input}</span>
    </label>
    <span class="remove"></span>
    `;
    
    if (document.querySelector('.filter input[type="radio"]:checked').id === 'completed') {
        newLI.classList.add('hidden');
    }
    todoList.append(newLI);
    updateItemes(1);
}

function updateItemes(number) {
    spanOne.innerText = +spanOne.innerText + number;
}

//remove item
function removeItem(input) {
    input.remove();
    updateItemes(-1);
}

todoList.addEventListener('click',(event) => {
    if (event.target.classList.contains('trash')) {
        removeItem(event.target.parentElement);
    }
});

//clear
document.querySelector('.clear').addEventListener('click', () => {
    document.querySelectorAll('.list-item input[type="checkbox"]:checked').forEach(item => {
        removeItem(item.closest('li'));
    });
});

//all active completed
document.querySelectorAll('.filter input').forEach(item => {
    item.addEventListener('change', (e) => {
        filterItems(e.target.id);
    });
});

function filterItems(id) {
    const all = todoList.querySelectorAll('li');

    switch(id) {
        case 'all':
            all.forEach(item => {
                item.classList.remove('hidden');
            })
            break;
        case 'active':
            all.forEach(item => {
                item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
            })
            break;
        default: 
            all.forEach(item => {
                !item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
            })
            break;
    }
}