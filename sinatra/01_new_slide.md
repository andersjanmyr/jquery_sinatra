!SLIDE commandline sinatra

# Install and Start #

    $ gem install sinatra
    $ sinatra hi.rb
    == Sinatra/1.0 has taken the stage on 4567 for development with backup from Thin
    >> Thin web server (v1.2.7 codename No Hup)
    >> Maximum connections set to 1024
    >> Listening on 0.0.0.0:4567, CTRL+C to stop

!SLIDE code sinatra
# First Sample #

    @@@ ruby
    # hi.rb
    require 'rubygems'
    require 'sinatra'

    get '/hi' do
      "Hello World!"
    end

!SLIDE bullets sinatra

# HTTP Verbs

* GET
* POST
* PUT
* DELETE

!SLIDE code

# Path Parameters

    @@@ ruby
    get '/hello/:name' do
      "Hello #{params[:name]}"
    end

    # curl http://localhost/hello/dude
    # => Hello Dude


!SLIDE code

# Query Parameters

    @@@ ruby
    get '/hello' do
      "Hello #{params[:name]}"
    end

    # curl http://localhost/hello?name=dude
    # => Hello Dude

!SLIDE bullets
# 

