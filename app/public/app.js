$(function() {

  $.ajaxSetup({
    dataType: 'text',
    error: function(xhr, status, error) {
      info('Error! ' +  ( error ? error : xhr.status ));
    }
  });

  function info(text) {
    $('#info-text').text(text);
  }


  $('#start').click(function() {
    info("New quiz started");
    $('#start').attr('disabled', 'disabled');
    postQuiz();
  });


  function postQuiz() {
    $.ajax({
      type: 'POST',
      url: '/quiz',
      success: function(token) {
        saveToken(token);
        enableDoors();
      }
    });
  }

  var currentToken;
  function saveToken(token) {
    currentToken = token;
  }

  function enableDoors() {
    info("Select a door!");
    $('#doors li')
      .addClass('enabled')
      .hover(
        function() {$(this).addClass('hover')},
        function() {$(this).removeClass('hover')})
      .click(function() {
        var door = $(this).addClass('selected').attr('data-id');
        $('#doors li')
          .unbind('click mouseenter mouseleave')
          .removeClass('enabled');
        putSelected(door);
      });
  }

  function putSelected(door) {
    $.ajax({
      type: 'PUT',
      url: '/quiz/' + currentToken + '/select/' + door,
      success: function(data) {
        info("Stick or Switch!");
        $('#door-' + data).addClass('removed').find('div').text('Removed');
        $('#stick-switch button').removeAttr('disabled');
      }
    });
  }

});