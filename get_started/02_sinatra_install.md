!SLIDE commandline sinatra

# Install

    $ gem install sinatra
    Successfully installed sinatra-1.1
    1 gem installed


!SLIDE code sinatra
# Inital Sinatra App

    @@@ ruby
    # app.rb
    require 'rubygems'
    require 'sinatra'

    # Serve static files from public
    set :public, "./public"


!SLIDE commandline sinatra
# Start

    ruby app.rb
    == Sinatra/1.0 has taken the stage on 4567 for development with backup from Thin
    >> Thin web server (v1.2.7 codename No Hup)
    >> Maximum connections set to 1024
    >> Listening on 0.0.0.0:4567, CTRL+C to stop

