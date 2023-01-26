@boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :name, :description, :user_id
        json.pin_count board.pins.count

        json.set! "pin_images" do 
            board.pins.each do |pin|
                json.child! do 
                    json.pin_images url_for(pin.images[0])
                 end
            end
        end
    end
end
