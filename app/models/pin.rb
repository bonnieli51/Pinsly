class Pin < ApplicationRecord
    validates :title, presence:true

    belongs_to :board
    belongs_to :user
    has_many_attached :images
end
