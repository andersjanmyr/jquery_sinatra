!SLIDE center transition=scrollUp
![Tapir App](stick_or_switch.png)

!SLIDE jquery
# postStickOrSwitch
## json

    @@@ Javascript
    function postStickOrSwitch(stickOrSwitch, door) {
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/stats/' + currentToken + '/' + stickOrSwitch + '/' + door,
        success: function(data) {
          ...
        }
      });
    }
