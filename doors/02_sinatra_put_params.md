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
# Query Parameters

    @@@ ruby
    put '/quiz' do
      "#{params[:quiz]}, #{params[:door]}"
    end

    # GET Style
    # /quiz?quiz=234&door=3
    # => 234, 3

    # POST Style
    # /quiz
    # quiz=234&door=3
    # => 234, 3



!SLIDE sinatra
# /quiz/:quiz/select/:door
## Implementation

    @@@ ruby
    put "/quiz/:quiz/select/:door" do |quiz, door|
      quiz = Quiz.quizzes[quiz.to_i]
      quiz.remove_door(door).to_s
    end
