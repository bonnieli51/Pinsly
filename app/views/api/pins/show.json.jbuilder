json.pin do
  json.extract! @pin, :id, :title, :description, :user_id
  json.image_url  url_for(@pin.images[0])
  json.comment_count @pin.comments.count
  json.username @pin.user.username
end