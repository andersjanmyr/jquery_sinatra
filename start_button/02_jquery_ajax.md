!SLIDE jquery
# Ajax
## Asynchronous Http Request

    @@@ Javascript
    $.ajax({
      type: 'POST',
      url: '/quiz',
      dataType: 'text',
      success: function(data) { ... },
      error: function(xhr, status, error) {
        info('Error! ' +
          ( error ? error : xhr.status ));
      }
    });

!SLIDE jquery bullets
# Ajax Shortcuts

    @@@ Javascript
    $.get(url, data, successCallback, dataType);
    $.post(url, data, successCallback, dataType);
    $.getJSON(url, data, successCallback);
    $.getScript(url, data, successCallback);
    .load(url, data, successCallback);
    // No error handling

!SLIDE jquery
# Post

    @@@ Javascript
    $.post('/quiz',
      function(data) { ... },
      'text');

      // No error handling


!SLIDE center transition=scrollDown
![404](start_button_404.png)