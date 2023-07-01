document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    let editMode = false;
    let currentEditItem = null;
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const todoText = input.value.trim();
  
      if (todoText !== '') {
        if (editMode) {
          updateTodoItem(currentEditItem, todoText);
          exitEditMode();
        } else {
          createTodoItem(todoText);
        }
  
        input.value = '';
      }
    });
  
    function createTodoItem(text) {
      const listItem = document.createElement('li');
      const todoText = document.createElement('span');
      const deleteBtn = document.createElement('button');
      const editBtn = document.createElement('button');
  
      todoText.textContent = text;
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete');
      editBtn.textContent = 'Edit';
      editBtn.classList.add('edit');
  
      listItem.appendChild(todoText);
      listItem.appendChild(deleteBtn);
      listItem.appendChild(editBtn);
  
      deleteBtn.addEventListener('click', function() {
        todoList.removeChild(listItem);
      });
  
      editBtn.addEventListener('click', function() {
        enterEditMode(listItem, todoText);
      });
  
      todoList.appendChild(listItem);
    }
  
    function enterEditMode(item, textElement) {
      editMode = true;
      currentEditItem = item;
      input.value = textElement.textContent;
      input.focus();
    }
  
    function updateTodoItem(item, newText) {
      const todoText = item.querySelector('span');
      todoText.textContent = newText;
    }
  
    function exitEditMode() {
      editMode = false;
      currentEditItem = null;
      input.value = '';
    }
  });
  