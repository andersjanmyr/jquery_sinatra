# encoding: UTF-8
require 'rubygems'
require 'sinatra'

set :public, "./public"

configure(:development) do |c|
  require "sinatra/reloader"
  c.also_reload "*.rb"
end

enable :run

get "/" do
  redirect 'index.html'
end

$quiz_counter = 0
$quizzes = {};

post "/quiz" do
  $quiz_counter += 1
  $quizzes[$quiz_counter] = rand(3) + 1
  p $quizzes
  $quiz_counter.to_s
end


put "/quiz/:quiz/select/:door" do |quiz, door|
  answer = $quizzes[quiz.to_i]
  doors = [1,2,3]
  doors.delete(door.to_i)
  doors.delete(answer)
  p doors
  doors[rand(doors.length + 1) - 1].to_s
end