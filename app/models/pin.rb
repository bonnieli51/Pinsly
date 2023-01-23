class Pin < ApplicationRecord
    validates :title, presence:true

    has_many :board_pin, dependent: :destroy
    has_many :boards,  through: :board_pin
    has_many :comments, dependent: :destroy
    belongs_to :user
    has_many_attached :images
end
