import { removeFromToDoList, saveToDoList } from './todo-list-functions';
import { toggleToDoInfo } from './toggleToDoInfo';
import { todo_list } from './todo-list';
import {
  show,
  setCloseMwOnEscape,
  setCloseMwByClickingOnBackground,
} from './mw-functions';
import { renderExactToDo } from './renderExactToDo';
import ToDoTaskElemnt from './Component/ToDoTaskElemnt';

export function setRemoveButton() {
  $('.remove-todo-button').click(function () {
    removeFromToDoList($(this).attr('data-id'));
    toggleToDoInfo();
    $(this).parent().parent().parent().fadeOut();
  });
}

export function setEditButton() {
  $('.edit-todo-button').click(function () {
    const id = $(this).attr('data-id');
    const q = $(this).attr('data-q');
    const { name, task_list } = todo_list[id];

    show($('.mw.edit-todo'));

    // set mw closing methods
    setCloseMwOnEscape();
    setCloseMwByClickingOnBackground('.mw.edit-todo');

    $('.mw-edit-title').text(name);

    // generate blocks with task and render `em
    let tasks = task_list.map(({ text, isDone, id }) =>
      ToDoTaskElemnt({ text, isDone, id })
    );
    
    $('.edit-todo .mw-task-list').html(tasks);

    $('.mw-task-toggle-button').change(function () {
      const button_id = Number($(this).attr('data-id'));

      todo_list[id].task_list[button_id].isDone =
        !todo_list[id].task_list[button_id].isDone;

      if (todo_list[id].task_list.every(e => e.isDone))
        todo_list[id].isDone = true;
      else todo_list[id].isDone = false;

      saveToDoList();
      renderExactToDo({ id, q });
    });
  });
}
