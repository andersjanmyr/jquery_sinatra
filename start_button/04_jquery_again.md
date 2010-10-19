!SLIDE jquery code
# ajax again

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
      type: 'POST',
      url: '/quiz',
      success: function(token) {
        $('#start').attr('disabled', 'disabled');
        saveToken(token);
        enableDoors();
      }
    });


!SLIDE jquery
# ajax call refactored

    @@@ Javascript
    var currentToken;
    function saveToken(token) {
      currentToken = token;
    }

    function enableDoors() {
      info("Select a door!");
    }

!SLIDE jquery
# enableDoors

    @@@ Javascript
    function enableDoors() {
       info("Select a door!" + currentToken);
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
         });
     }
