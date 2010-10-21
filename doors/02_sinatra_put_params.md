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

    # /quiz/234/select/3/5/6
    # => "HTTP/1.1" 404

!SLIDE code sinatra

# Splat Parameters with Block
    @@@ ruby
    put '/quiz/*/select/*' do
      "#{params[:splat]}"
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

!SLIDE sinatra
# /quiz/:quiz/select/:door impl

    @@@ Javascript
    put "/quiz/:quiz/select/:door" do |quiz, door|
      answer = $quizzes[quiz.to_i]
      doors = [1,2,3]
      doors.delete(door.to_i)
      doors.delete(answer)
      doors[rand(doors.length + 1) - 1].to_s
    end