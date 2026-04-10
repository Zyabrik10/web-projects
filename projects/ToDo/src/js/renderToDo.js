import ToDoItem from './Component/ToDoItem';
import { setEditButton, setRemoveButton } from './setButtons';

export function renderToDo({ id, name, isDone }) {
  $('.todo-list').append(
    ToDoItem({ id, name, isDone, q: $('.todo-list > li').length })
  );
  $('.todo-list > li:last-child').hide().fadeIn();
  setEditButton();
  setRemoveButton();
}
