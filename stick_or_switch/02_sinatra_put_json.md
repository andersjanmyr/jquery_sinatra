!SLIDE code sinatra

# Put with Splat Parameters

    @@@ ruby
    put "/quiz/*/*" do
    end

!SLIDE code sinatra

# Splat Parameters
    @@@ ruby
    put '/quiz/*/*' do
      "#{params[:splat]}"
    end

    # /quiz/234/stick
    # => [234, 'stick']

    # /quiz/234/stick/3/5/6
    # => [234, stick/3/5/6]

!SLIDE code sinatra
# Splat Parameters with Block

    @@@ ruby
    put '/quiz/*/*' do |q, c|
      "#{q}, #{c}"
    end

    # /quiz/234/stick
    # => 234, stick

    # /quiz/234/select/3/5/6
    # => 234, 3/5/6

!SLIDE code sinatra
# /quiz impl
## to_json

    @@@ ruby
    require 'json'

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

