!SLIDE bullets jquery
# jQuery Basics

* Find some html
* Do something with it
* $ = jQuery

!SLIDE jquery code
## click, preventDefault, attr, text

    @@@ Javascript
    $(function() { //jQuery document ready

      $('#start').click(function(e) {
        e.preventDefault();
        $(this).attr('disabled', 'disabled');
        $('#info-text').text("New quiz started");
        $.ajax(...);
      });

    });

!SLIDE jquery code
# Extract Method

    @@@ Javascript
    $(function() {
      function info(text) {
        $('#info-text').text(text);
      }

      $('#start').click(function(e) {
        e.preventDefault();
        $(this).attr('disabled', 'disabled');
        info("New quiz started");
        $.ajax(...);
      });
    });




