!SLIDE bullets jquery
# jQuery Basics

* Find some html
* Do something with it
* jQuery aliased as $

!SLIDE jquery code execute
## $(function() {});

    @@@ Javascript
    // The jQuery function executes when
    // the DOM is ready to be manipulated
    // when given a function as parameter
    $(function() {
      result = 'The DOM is ready';
    })

!SLIDE jquery code execute
## Selector $('#start'), .click (listener)


    @@@ Javascript
    // Select the element with id start
    // and attach a click listener to it
    // when given a string as parameter
    $('#start').click(function(e) {
        alert("OK, OK, I'm clicked!");
    });

<button id='start'>Start</button>

!SLIDE jquery code execute
## $(this), .attr

    @@@ Javascript
    // Wraps the element
    // when given a element as parameter
    $('#disable_me').click(function(e) {
      $(this).attr('disabled', 'disabled');
    });

<button id='disable_me'>Disable Me</button>


