$(function() {
  var currentToken;

  function info(text) {
    $('#info-text').text(text);
  }

  function saveToken(token) {
    currentToken = token;
  }

  function enableDoors() {
    $('#info-text').text();
  }

  $('#start').click(function() {
    info("New quiz started");
    $.ajax({
      type: 'PUT',
      url: '/start',
      dataType: 'text',
      success: function(token) {
        $(this).attr('disabled', 'disabled');
        saveToken(token);
        enableDoors();
      },
      error: function(xhr, textStatus, errorThrown) {
        info('Error! ' + ( errorThrown ? errorThrown : xhr.status ));
      }
    });
  });

});