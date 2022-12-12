

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
    board_id: board_1.id
  )
  image_1 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/cat.jpeg")
  pin_1.images.attach(io: image_1, filename:"cat.jpeg")
  pin_1.save!

  puts "Done!"
