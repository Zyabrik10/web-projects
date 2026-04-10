import { todo_list } from './todo-list';

export function renderExactToDo({ id, q }) {
  const li = $(`.todo-list > li[data-q=${q}]`);
  const { name, isDone } = todo_list[id];

  li.find('.todo-item-name').html(name);
  li.find('.todo-item-status').html(isDone ? 'Done' : 'Undone');

  if (isDone) {
    li.find('.todo-item-status').addClass('done');
    li.find('.todo-item-status').removeClass('undone');
  } else {
    li.find('.todo-item-status').removeClass('done');
    li.find('.todo-item-status').addClass('undone');
  }
}
