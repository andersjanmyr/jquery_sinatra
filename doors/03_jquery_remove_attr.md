!SLIDE jquery
# putSelected
## removeAttr

    @@@ Javascript
    function putSelected(door) {
      ...
        success: function(data) {
          info("Stick or Switch!");
          ...
          $('#stick-switch button')
            .removeAttr('disabled');
        }
      });
    }


