!SLIDE jquery
# enableDoors
## addClass, removeClass, hover

    @@@ Javascript
    function enableDoors() {
      info("Select a door!");
      $('#doors li')
        .addClass('enabled')
        .hover(
          function() {$(this).addClass('hover')},
          function() {$(this).removeClass('hover')})
        .click(doorSelected);
    }

!SLIDE jquery
# doorSelected
## unbind, mouseenter, mouseleave

    @@@ Javascript
    function doorSelected(e) {
      e.preventDefault();
      var door = $(this)
        .removeClass('enabled')
        .addClass('selected')
        .attr('data-id');
      $('#doors li')
        .unbind('click mouseenter mouseleave')
      putSelected(door);
    }

!SLIDE jquery
# doorSelected
## unbind, mouseenter, mouseleave

    @@@ Javascript
    $('#doors li')
      .unbind('click mouseenter mouseleave')
    putSelected(door);


!SLIDE jquery
# putSelected
## PUT, currentToken

    @@@ Javascript
    function putSelected(door) {
      $.ajax({
        type: 'PUT',
        url: '/quiz/' + currentToken + '/select/' + door,
        success: function(data) { ... }
      });
    }

