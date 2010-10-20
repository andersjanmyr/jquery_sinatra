!SLIDE code sinatra

# Put with Parameters

    @@@ ruby
    put '/quiz/:quiz/select/:door' do
      "#{params[:quiz]}, #{params[:door]}"
    end

    # /quiz/234/select/3
    # => 234, 3

!SLIDE code sinatra

# Put with Block Parameters

    @@@ ruby
    put '/quiz/:quiz/select/:door' do |q, d|
      "#{q}, #{d}"
    end

    # /quiz/234/select/3
    # => 234, 3

!SLIDE code sinatra

# Splat Parameters with Block
    @@@ ruby
    put '/quiz/*/select/*' do
      "#{params[:splot]}"
    end

    # /quiz/234/select/3
    # => 234, 3

    # /quiz/234/select/3/5/6
    # => 234, 3/5/6

!SLIDE code sinatra
# Splat Parameters with Block

    @@@ ruby
    put '/quiz/*/select/*' do |q, d|
      "#{q}, #{d}"
    end

    # /quiz/234/select/3
    # => 234, 3

    # /quiz/234/select/3/5/6
    # => 234, 3/5/6

