!SLIDE commandline sinatra

# Install

    $ gem install sinatra
    Successfully installed sinatra-1.0
    1 gem installed

!SLIDE commandline sinatra
# Start

    ruby app.rb
    == Sinatra/1.0 has taken the stage on 4567 for development with backup from Thin
    >> Thin web server (v1.2.7 codename No Hup)
    >> Maximum connections set to 1024
    >> Listening on 0.0.0.0:4567, CTRL+C to stop


!SLIDE code sinatra
# Setup Code

    @@@ ruby
    # app.rb
    require 'rubygems'
    require 'sinatra'

    put "/start" do
    end

!SLIDE bullets sinatra

# Routes, HTTP Verbs

* GET
* POST
* PUT
* DELETE

!SLIDE sinatra code
# /start implementation

    @@@ Ruby
    $token_counter = 0
    $quizzes = {};

    put "/start" do
      $token_counter += 1
      $quizzes[$token_counter] = rand(3) + 1
      p $quizzes
      $token_counter
    end
