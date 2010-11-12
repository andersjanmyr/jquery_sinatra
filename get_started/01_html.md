!SLIDE small
# Simple HTML
.notes Simple HTML

    @@@ Html
    <html>
    <head>
      <link rel="stylesheet" href="app.css" type="text/css">
      <title>Where's the Tapir?</title>
    </head>
    <body class='orange'>
      <form>
        <h1>Where is the Tapir?</h1>
        <div id='start-header'>
          <button id='start'>Start</button>
          <h2 id='info-text'></h2>
        </div>
        <ul id='doors'>
          <li id='door-1' data-id='1'>1<div>Removed</div></li>
          <li id='door-2' data-id='2'>2<div>Removed</div></li>
          <li id='door-3' data-id='3'>3<div>Removed</div></li>
        </ul>
        <div id='stick-switch'>
          <span id='stick-count'>0/0 = 0%</span>
          <button data-id='stick' disabled>Stick</button>
          <button data-id='switch' disabled>Switch</button>
          <span id='switch-count'>0/0 = 0%</span>
        </div>
      </form>
      <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js'> </script>
      <script type="text/javascript" src="app.js"> </script>
    </body>
    </html>

!SLIDE
# HTML Focus
## data-attributes, script before \</body\>

    @@@ HTML
    <body class='orange'>
      ...
        <li id='door-1' data-id='1'>1<div>Removed</div></li>
      ...
      <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js'> </script>
      <script type="text/javascript" src="app.js"> </script>
    </body>
    </html>
