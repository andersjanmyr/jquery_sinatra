!SLIDE center transition=scrollUp
![Tapir App](stick_or_switch.png)

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
