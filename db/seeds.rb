require "open-uri"

User.destroy_all
Board.destroy_all

demo_user = User.create!(
  username: 'Demo-lition', 
  email: 'demo@user.io', 
  age: 20,
  password: 'password'
)

board_1 = Board.create!(
  name: "Cats",
  description: "MeowMeow",
  user_id: demo_user.id
)

board_2 = Board.create!(
  name: "Dogs",
  description: "WoofWoof",
  user_id: demo_user.id
)

pin_1 = Pin.create!(
  title:"Cat",
  description:"Cat trying to touch its legs",
  user_id: demo_user.id,
  board_id: board_1.id )

  image_1 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/cat.jpeg")
  pin_1.images.attach(io: image_1, filename:"cat.jpeg")
  pin_1.save!

pin_2 = Pin.create!(
  title:"Cat Looking Up",
  description:"",
  user_id: demo_user.id,
  board_id: board_1.id)
  
  image_2 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_1.jpeg")
  pin_2.images.attach(io: image_2, filename:"cat_1.jpeg")
  pin_2.save!
  
pin_3 = Pin.create!(
  title:"Cat Eating",
  description:"",
  user_id: demo_user.id,
  board_id: board_1.id)

  image_3 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_2.jpeg")
  pin_3.images.attach(io: image_3, filename:"cat_2.jpeg")
  pin_3.save!

pin_4 = Pin.create!(
  title:"Cat Sticking Out his Tongue",
  description:"",
  user_id: demo_user.id,
  board_id: board_1.id)

  image_4 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_3.jpeg")
  pin_4.images.attach(io: image_4, filename:"cat_2.jpeg")
  pin_4.save!

puts "Done!"
