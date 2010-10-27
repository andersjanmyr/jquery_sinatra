!SLIDE code sinatra

# Post with Splat Parameters

    @@@ ruby
    post "/stats/*/*/*" do
    end

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

!SLIDE code sinatra
# /stats impl
## to_json

    @@@ ruby
    post "/stats/*/*/*" do |quiz, s_or_s, door|
      answer = $quizzes[quiz.to_i]
      update_stats(s_or_s)
      message = stats()
      message[:answer] = answer
      message[:correct] = (answer == door.to_i)
      message[:stick_or_switch] = s_or_s
      message.to_json
    end
