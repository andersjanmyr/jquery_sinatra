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

$token_counter = 0
$quizzes = {};

post "/start" do
  $token_counter += 1
  $quizzes[$token_counter] = rand(3) + 1
  p $quizzes
  $token_counter
end