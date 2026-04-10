import { addToDoModel } from '../model/add-todo';

export function addToDoController() {
  if ($('#add-todo .todo-title-input').val().trim() === '') {
    Notiflix.Notify.info('Enter title for ToDo');
    return;
  } else if ($('#add-todo .mw-task-list > li').length === 0) {
    Notiflix.Notify.info('Create at least one task for ToDo');
    return;
  }

  addToDoModel();
}
