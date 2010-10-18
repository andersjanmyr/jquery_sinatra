!SLIDE jquery code
# ajax again

    @@@ Javascript
    $.ajax({
      type: 'PUT',
      url: '/start',
      dataType: 'text',
      success: function(token) {
        $('#start').attr('disabled', 'disabled');
        saveToken(token);
        enableDoors();
      },
      error: function(xhr, status, error) {
        info('Error! ' +
          ( error ? error : xhr.status ));
    });

!SLIDE jquery
# ajaxSetup

    @@@ Javascript
    $.ajaxSetup({
      dataType: 'text',
      error: function(xhr, status, error) {
        info('Error! ' +
          ( error ? error : xhr.status ));
    });


!SLIDE jquery
# ajax call refactored

    @@@ Javascript
    $.ajax({
      type: 'PUT',
      url: '/start',
      success: function(token) {
        $('#start').attr('disabled', 'disabled');
        saveToken(token);
        enableDoors();
      }
    });


!SLIDE jquery
# ajax call refactored

    @@@ Javascript
    function saveToken(token) {
      currentToken = token;
    }

    var currentToken;
    function enableDoors() {
      info("Select a door!");
    }

