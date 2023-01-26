json.board do
  json.extract! @board, :id, :name, :description, :user_id
  json.pin_count @board.pins.count
  json.set! "pin_images" do 
    board.pins.each do |pin|
      json.child! do 
          json.image_url url_for(pin.images[0])
        end
    end
  end
end