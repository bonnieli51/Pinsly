@pins.each do |board|
    json.set! board[0] do    
        board[1].each do |pin|
            json.child! do 
                 json.id
                 json.title
                 json.description 
                 json.user_id
                json.image_url  url_for(pin.images[0])
            end
        end
    end
end