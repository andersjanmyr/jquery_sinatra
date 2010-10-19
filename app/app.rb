# encoding: UTF-8
require 'rubygems'
require 'sinatra'
require 'json'

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

$stick_count = 0
$stick_correct_count = 0
$switch_count = 0
$switch_correct_count = 0
put "/quiz/:quiz/:stick_or_switch/:door" do |quiz, stick_or_switch, door|
  answer = $quizzes[quiz.to_i]
  if stick_or_switch == 'stick'
    $stick_count += 1
    $stick_correct_count += 1 if answer == door.to_i
  else
    $switch_count += 1
    $switch_correct_count += 1 if answer == door.to_i
  end
  {
    :answer => answer,
    :stick => [$stick_correct_count, $stick_count],
    :switch => [$switch_correct_count, $switch_count]
  }.to_json
end