!SLIDE code sinatra

# Post with Splat Parameters

    @@@ ruby
    post "/stats/*/*/*" do
    end

!SLIDE code sinatra

# Splat Parameters
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
# /quiz impl
## to_json

    @@@ ruby
    put "/quiz/*/*" do |quiz, choice|
      quiz = Quiz.quizzes[quiz.to_i]
      quiz.choose(choice)
      status = quiz.status
      Stats.get(status)
      status.to_json
    end

!SLIDE code
# JSON

    @@@ Javascript
    {
      "correct_door": 3,
      "is_correct": false,
      "choice": "stick",
      "stick": [8, 14],
      "switch": [2, 5]
    }

