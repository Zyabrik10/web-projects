import { addToDoToList } from '../js/todo-list-functions';
import { nanoid } from 'nanoid';
import { renderToDo } from '../js/renderToDo';
import { toggleToDoInfo } from '../js/toggleToDoInfo';
import { hide } from '../js/mw-functions';

export function addToDoModel() {
  const name = $('.todo-title-input').val().trim();
  const task_list = Array.from($('.mw-added-task-list > li')).map(
    (e, index) => {
      return {
        id: index,
        isDone: false,
        text: e.querySelector('.mw-task-name').innerText.trim(),
      };
    }
  );

  const obj = {
    name,
    task_list,
    id: nanoid(4),
    isDone: false,
  };

  addToDoToList(obj);
  renderToDo(obj);
  toggleToDoInfo();

  hide('#add-todo');
  $('.todo-title-input').val('').removeClass('active');
  $('.todo-task-input').val('').removeClass('active');
  $('.mw-task-list').html('');
}
