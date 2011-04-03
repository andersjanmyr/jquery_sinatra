!SLIDES center
## Application Flow
![flow](flow.png)

!SLIDE center transition=scrollUp
![Tapir App](../intro/where_is_the_tapir_app.png)

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

