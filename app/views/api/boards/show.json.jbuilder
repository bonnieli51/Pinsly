json.board do
  json.extract! @board, :id, :name, :description, :user_id
end