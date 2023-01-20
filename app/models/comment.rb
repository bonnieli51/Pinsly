class Comment < ApplicationRecord
    validates :description, presence: :true, length: {in: 3..255}
    validates :user_id, presence: :true
    validates :pin_id, presence: :true

    belongs_to :user
    belongs_to :pin
end
