const newTask = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
const taskItem = document.querySelector('#task-item');
const completedItem = document.querySelector('#completed-item');

const createItem = (itemName)=>{
    const item = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');

    item.className = 'item';
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox'
    label.innerText = itemName;
    item.appendChild(checkbox);
    item.appendChild(label);
    checkbox.addEventListener('click', moveItem);
    return item
}

const addItem = (event)=>{
    event.preventDefault();
    const item = createItem(newTask.value);
    if(newTask.value === ""){
        alert('Please Input Your Task');
    }else{
        taskItem.appendChild(item);
    }
    newTask.value = "";
   
}

const moveItem = (event)=>{
    const selectedItem = event.target.parentElement;
    selectedItem.remove()
    createCompleteItem(selectedItem)
    
}
const createCompleteItem = (selectedItem)=>{
    const newItem = selectedItem.lastChild;
    const item = document.createElement('li');
    const removeBtn = document.createElement('button')
    const text = document.createTextNode("\u00D7");
    item.className = 'item';
    removeBtn.appendChild(text);
    removeBtn.className = 'remove-btn';
    item.appendChild(newItem);
    item.appendChild(removeBtn);
    completedItem.appendChild(item);
    item.addEventListener('click', removeItem)
}

const removeItem = (event)=>{
    const selectedItem = event.target.parentElement;
    selectedItem.remove()
    
}

form.addEventListener('submit', addItem);
