!SLIDE center transition=scrollUp
![Tapir App](stick_or_switch.png)

!SLIDE jquery
# $('#stick-switch button')

    @@@javascript
    $('#stick-switch button').click(function(e) {
      e.preventDefault();
      var value = $(this).data('id');
      putChoice(value);
    });




!SLIDE jquery
# putChoice
## json

    @@@ Javascript
    function putChoice(value) {
      $.ajax({
        type: 'PUT',
        dataType: 'json',
        url: '/quiz/' + currentToken + '/' + value ,
        success: function(data) {
          ...
        }
      });
    }
