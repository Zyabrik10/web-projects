import { todo_list } from '../js/todo-list';

export function saveToDoList() {
  if (todo_list) localStorage.setItem('todo-list', JSON.stringify(todo_list));
  else Notiflix.Notify.failure('ToDo is not saved :(');
}

export function addToDoToList({ id, name, task_list, isDone }) {
  todo_list[id] = {
    name,
    task_list,
    isDone,
  };
  Notiflix.Notify.success('ToDo was successfully created');
  saveToDoList();
}

export function removeFromToDoList(id) {
  delete todo_list[id];
  Notiflix.Notify.success('ToDo was successfully removed');
  saveToDoList();
}
