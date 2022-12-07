class Board < ApplicationRecord
    validates :name, :user_id, presence: true
    validates :name, uniqueness: { scope: :user_id,
    message: "Try a different name. You already have a board with this name!" }

    belongs_to to :user
end
