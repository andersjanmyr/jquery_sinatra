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


!SLIDE jquery code execute
## $(function() {});

    @@@ Javascript
    // The jQuery function execute when
    // the DOM is ready to be manipulated
    $(function() {
      alert('The dom is ready');
    })

!SLIDE jquery code execute
## Selector $('#start'), Listener .click


    @@@ Javascript
    // Select the element with id start
    // and attach a click listener to it
    $('#start').click(function(e) {
      alert("OK, OK, I'm clicked!");
    });

<button id='start'>Start</button>

!SLIDE jquery code execute
## $(this)

    @@@ Javascript
    $('#disable_me').click(function(e) {
      $(this).attr('disabled', 'disabled');
    });

<button id='disable_me'>Disable Me</button>

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

