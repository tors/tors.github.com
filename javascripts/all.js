

$(function() {

  $('input[name="q"]').focus(function() {
    var element = $(this);
    if (element.val() === 'Search')
      element.val('');
  });

  $('input[name="q"]').blur(function() {
    var element = $(this);
    if (element.val().length === 0)
      element.val('Search');
  });

  $('.showPrevious').click(function(e) {
    $(this).parent().next('div.previous').toggle();
    e.preventDefault();
  });
});
