@pins.each do |pin|
    json.set! pin.id do
        json.extract! pin, :id, :title, :description, :user_id, :board_id

        json.image_url  url_for(pin.images[0])
        # if pin.images.attached?
        #     json.images_url pin.images.map{|image| url_for(image)}
        # end

    end
  end
