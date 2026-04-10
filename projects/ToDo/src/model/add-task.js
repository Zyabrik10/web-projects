import ToDoTaskItem from '../js/Component/ToDoTaskItem';

export function addTaskModel() {
  const li = $(ToDoTaskItem());

  $('#add-todo .mw-task-list').append(li);
  $('#add-todo .mw-task-list > li:last-child').hide().fadeIn();

  $('#add-todo .mw-task-remove-button').click(function () {
    $(this).parent().fadeOut();
    setTimeout(() => {
      $(this).parent().remove();
    }, 400);
  });
}
