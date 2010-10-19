!SLIDE jquery
# Ajax
## Asynchronous Http Request
.notes PUT does not work for all browsers, make sure you check

    @@@ Javascript
    $.ajax({
      type: 'POST',
      url: '/start',
      dataType: 'text',
      success: function(data) { ... },
      error: function(xhr, status, error) {
        info('Error! ' +
          ( error ? error : xhr.status ));
      }
    });

!SLIDE jquery bullets
# Ajax Shortcuts

* $.get()
* $.post()
* $.load()
* $.getJSON()
* $.getScript()

!SLIDE center transition=scrollDown
![404](start_button_404.png)