export function hide(selector) {
  $(selector).fadeOut();
}

export function show(selector) {
  $(selector).fadeIn();
}

export function setCloseMwOnEscape() {
  $(window).on('keydown', function closeMw(e) {
    if (e.key === 'Escape') {
      hide($('.mw'));
      $(window).off('keydown');
    }
  });
}

export function setCloseMwByClickingOnBackground(mwSelector) {
  $(mwSelector).mousedown(function (e) {
    if (e.target.classList.contains('mw')) {
      hide($(mwSelector));
      $(window).off('keydown');
    }
  });
}
