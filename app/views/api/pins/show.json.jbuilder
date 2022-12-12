json.pin do
  json.extract! @pin, :id, :title, :description, :user_id, :board_id
end