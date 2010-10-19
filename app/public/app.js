$(function() {
  var currentToken;

  function info(text) {
    $('#info-text').text(text);
  }

  function saveToken(token) {
    currentToken = token;
  }

  function enableDoors() {
    info("Select a door!" + currentToken);
    $('#doors li')
      .addClass('enabled')
      .hover(function() {$(this).addClass('hover')}, function() {$(this).removeClass('hover')})
      .click(function() {
        var door = $(this).addClass('selected').attr('data-id');
        $('#doors li').unbind('click mouseenter mouseleave').removeClass('enabled');
      });
  }

  $('#start').click(function() {
    info("New quiz started");
    $('#start').attr('disabled', 'disabled');
    $.ajax({
      type: 'POST',
      url: '/start',
      dataType: 'text',
      success: function(token) {
        saveToken(token);
        enableDoors();
      }
    });
  });

  $.ajaxSetup({
    dataType: 'text',
    error: function(xhr, status, error) {
      info('Error! ' +  ( error ? error : xhr.status ));
    }
  });

});