get '/foo', :agent => /Songbird (\d\.\d)[\d\/]*?/ do
    "You're using Songbird version #{params[:agent][0]}"
  end
