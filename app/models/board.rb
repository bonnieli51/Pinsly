class Board < ApplicationRecord
    validates :name, :user_id, presence: true
    validates :name, uniqueness: { scope: :user_id,
    message: "Try a different name. You already have a board with this name!" }

    belongs_to :user
    has_many :board_pins, dependent: :destroy
    has_many :pins, through: :board_pins
end
