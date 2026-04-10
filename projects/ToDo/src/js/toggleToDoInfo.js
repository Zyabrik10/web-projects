import { todo_list } from './todo-list';

export function toggleToDoInfo() {
  !Object.keys(todo_list).length
    ? $('.todo-empty-p').fadeIn()
    : $('.todo-empty-p').fadeOut();
}
