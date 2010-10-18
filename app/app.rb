# encoding: UTF-8
require 'rubygems'
require 'sinatra'

set :public, File.dirname(__FILE__) + "/public"

configure(:development) do |c|
  require "sinatra/reloader"
  c.also_reload "*.rb"
end

enable :run

get "/" do
  redirect 'index.html'
end

put "/start" do
end