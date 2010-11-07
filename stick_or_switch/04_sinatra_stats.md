!SLIDE code sinatra
# /stats impl
## to_json

    @@@ Ruby
    get '/stats' do
      Stats.get.to_json
    end

!SLIDE code
# JSON

    @@@ Javascript
    {
      "stick": [8, 14],
      "switch": [2, 5]
    }

!SLIDE
# Show Application
