@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :description, :user_id, :pin_id
    end
  end
