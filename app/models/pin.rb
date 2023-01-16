class Pin < ApplicationRecord
    validates :title, presence:true

    has_many :board_pins, dependent: :destroy
    has_many :boards,  through: :board_pins
    belongs_to :user
    has_many_attached :images
end
