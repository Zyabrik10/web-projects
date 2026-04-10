import { addTaskModel } from '../model/add-task';

export function addTaskController() {
  const todo_task_input = $('#add-todo .todo-task-input');

  if (todo_task_input.val().trim() === '') return;
  addTaskModel();
}
