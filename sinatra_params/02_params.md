!SLIDE code sinatra

# Query Parameters

    @@@ ruby
    get '/hello' do
      "Hello #{params[:name]}"
    end

    # curl http://localhost/hello?name=dude
    # => Hello Dude


!SLIDE code sinatra

# Path Parameters

    @@@ ruby
    get '/hello/:name' do
      "Hello #{params[:name]}"
    end

    # curl http://localhost/hello/dude
    # => Hello Dude

!SLIDE code sinatra

# Path Parameters with block

    @@@ ruby
    get '/hello/:name' do |n|
      "Hello #{n}"
    end

    # curl http://localhost/hello/dude
    # => Hello Dude

!SLIDE code sinatra

# Splat Parameters

    @@@ ruby
    get '/many/*/can/*' do
      "Many #{params[:splat]}"
    end

    # curl http://localhost:4567/many/params/can/be/added
    # => Many ["params", "be/added"]

!SLIDE code sinatra

# Splat Params with Block

    @@@ ruby
    get '/many/*/can/*' do |first, rest|
      "First #{first}, Rest #{rest}"
    end

    # curl http://localhost:4567/many/params/can/be/added
    # => First params, Rest be/added


