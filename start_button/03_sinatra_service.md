!SLIDE bullets sinatra

# Routes, HTTP Verbs

* GET
* POST
* PUT
* DELETE

!SLIDE sinatra code
# /quiz implementation

    @@@ Ruby
    $token_counter = 0
    $quizzes = {};

    post "/quiz" do
      $token_counter += 1
      $quizzes[$token_counter] = rand(3) + 1
      p $quizzes
      $token_counter
    end
