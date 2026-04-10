import {
  setCloseMwOnEscape,
  show,
  setCloseMwByClickingOnBackground,
} from '../mw-functions';

$('.button-todo-add').click(function () {
  show($('.mw.add-todo'));
  setCloseMwOnEscape();
});

setCloseMwByClickingOnBackground('.mw.add-todo');
