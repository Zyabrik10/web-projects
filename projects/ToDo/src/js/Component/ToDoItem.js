const ToDoItem = ({ id, name, isDone, q }) =>
  `
  <li class="todo-item flex-container-item" data-id="${id}" data-q="${q}">
            <p class="todo-item-status ${
              isDone ? 'done' : 'undone'
            } global-p">${isDone ? 'Done' : 'Undone'}</p>
            <p class="todo-item-name global-p">${name}</p>
            <ul class="todo-item-buttons global-list">
              <li>
                <button class="todo-item-button edit-todo-button global-button" type="button" data-id="${id}" data-q="${q}">Edit</button>
              </li>
              <li>
                <button class="todo-item-button remove-todo-button global-button" type="button" data-id="${id}" data-q="${q}">Remove</button>
              </li>
            </ul>
          </li>
  `;

export default ToDoItem;
