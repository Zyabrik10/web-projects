const ToDoTaskItem = () => `
        <li>
          <p class="mw-task-name global-p">${$('.todo-task-input')
            .val()
            .trim()}</p>
          <button class="mw-task-remove-button global-button" type="button">&times;</button>
        </li>
    `;

export default ToDoTaskItem;
