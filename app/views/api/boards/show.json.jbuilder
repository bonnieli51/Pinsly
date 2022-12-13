json.board do
  json.extract! @board, :id, :name, :description, :user_id

  json.pin_count @board.pins.count
end