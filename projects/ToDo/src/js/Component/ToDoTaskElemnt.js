const ToDoTaskElemnt = ({ text, isDone, id }) => `
        <li>
          <p class="mw-task-name global-p">${text}</p>
          <input class="mw-task-toggle-button global-button" type="checkbox" ${
            isDone ? 'checked' : ''
          } data-id="${id}">
        </li>
      `;

export default ToDoTaskElemnt;
