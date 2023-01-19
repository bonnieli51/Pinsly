class Pin < ApplicationRecord
    validates :title, presence:true

    has_many :board_pin, dependent: :destroy
    has_many :boards,  through: :board_pin
    belongs_to :user
    has_many_attached :images
end
