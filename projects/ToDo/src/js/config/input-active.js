$('.mw-input').blur(function () {
  if ($(this).val().trim() !== '') $(this).addClass('active');
  else $(this).removeClass('active');
});
