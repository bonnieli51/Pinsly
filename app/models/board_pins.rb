class BoardPins < ApplicationRecord
    validates :board_id, :pin_id, presence: true
    validates :board_id, uniqueness: { scope: :pin_id,
    message: "This pin already exists in this board" }

    belongs_to :pin
    belongs_to :board
end