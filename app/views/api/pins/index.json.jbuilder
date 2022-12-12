@pins.each do |pin|
    json.set! pin.id do
        json.extract! pin, :id, :title, :description, :user_id, :board_id
    end
  end
