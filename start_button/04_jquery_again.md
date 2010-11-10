!SLIDE jquery code
# jQuery again

    @@@ Javascript
    $.ajax({
      type: 'POST',
      url: '/quiz',
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
## Extract common behavior

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
    $.post('/quiz', function(token) {
        $('#start').attr('disabled', 'disabled');
        saveToken(token);
        enableDoors();
    });


!SLIDE jquery
# saveToken

    @@@ Javascript
    var currentToken;
    function saveToken(token) {
      currentToken = token;
    }

    function enableDoors() {
      // ...
    }

