@boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :description, :user_id, :pin_id
        json.pin_count board.pins.count
    end
  end
