require "open-uri"

User.destroy_all
Board.destroy_all
Pin.destroy_all
BoardPin.destroy_all

demo_user = User.create!(
  username: 'DemoUser', 
  email: 'demo@user.io', 
  age: 20,
  password: 'password'
)

user_1 = User.create!( 
  username: 'Bonnie123',
  email: 'bonnie123@user.io',
  age: 25, 
  password: 'password'
)

user_2 = User.create(
  username: 'JeremywasHere', 
  email: 'jeremy123@user.io', 
  age: 30, 
  password: 'password' 
)

user_3 = User.create(
  username: 'JustinOut', 
  email: 'justinhwang@user.io', 
  age: 30, 
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

board_3 = Board.create!(
  name: "Bunnies",
  description: "",
  user_id: demo_user.id
)

board_4 = Board.create!(
  name: "Birds",
  description: "ChirpChirp",
  user_id: demo_user.id
)

board_5 = Board.create!(
  name: "Pigs",
  description: "OinkOink",
  user_id: demo_user.id
)

board_6 = Board.create!(
  name: "Animals",
  description: "Cute Animal Pictures",
  user_id: user_1.id
)

pin_1 = Pin.create!(
  title:"Cat",
  description:"Cat trying to touch its legs",
  user_id: demo_user.id)

  image_1 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat.jpeg")
  pin_1.images.attach(io: image_1, filename:"cat.jpeg")
  pin_1.save!

pin_2 = Pin.create!(
  title:"Cat Looking Up",
  description:"",
  user_id: demo_user.id)
  
  image_2 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_1.jpeg")
  pin_2.images.attach(io: image_2, filename:"cat_1.jpeg")
  pin_2.save!

  comment_1 = Comment.create!(
  description: "Legs are too short!",
  pin_id: pin_1.id,
  user_id: user_1.id
)

comment_2 = Comment.create!(
  description: "I want that cat",
  pin_id: pin_1.id,
  user_id: user_2.id
)

comment_3 = Comment.create!(
  description: "I guess that cat is cute.",
  pin_id: pin_1.id,
  user_id: user_3.id
)
  
pin_3 = Pin.create!(
  title:"Cat Eating",
  description:"",
  user_id: user_1.id)

  image_3 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_2.jpeg")
  pin_3.images.attach(io: image_3, filename:"cat_2.jpeg")
  pin_3.save!

pin_4 = Pin.create!(
  title:"Cat Sticking Out his Tongue",
  description:"",
  user_id: demo_user.id)

  image_4 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_3.jpeg")
  pin_4.images.attach(io: image_4, filename:"cat_3.jpeg")
  pin_4.save!

pin_5 = Pin.create!(
  title:"Round Cat Eyes",
  description:"This cat's eye is so round!",
  user_id: user_1.id)

  image_5 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_4.jpeg")
  pin_5.images.attach(io: image_5, filename:"cat_4.jpeg")
  pin_5.save!

pin_6 = Pin.create!(
  title:"Kitten yawning",
  description:"I actually like the green so",
  user_id: user_2.id)

  image_6 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_6.jpeg")
  pin_6.images.attach(io: image_6, filename:"cat_6.jpeg")
  pin_6.save!

pin_7 = Pin.create!(
  title:"Flower Crown Cat",
  description:"Cat looks so majestic",
  user_id: user_1.id)

  image_7 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_7.jpeg")
  pin_7.images.attach(io: image_7, filename:"cat_7.jpeg")
  pin_7.save!

pin_8 = Pin.create!(
  title:"Orange Tabby",
  description:"Just looking out a dirty window",
  user_id: user_2.id)

  image_8 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_8.jpeg")
  pin_8.images.attach(io: image_8, filename:"cat_8.jpeg")
  pin_8.save!

pin_9 = Pin.create!(
  title:"Cat with Strange Markings",
  description:"This cat looks like a cow",
  user_id: user_1.id)

  image_9 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_9.jpeg")
  pin_9.images.attach(io: image_9, filename:"cat_9.jpeg")
  pin_9.save!

pin_10 = Pin.create!(
  title:"Calico Cat",
  description:"This cat also has round eyes",
  user_id: demo_user.id)

  image_10 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat_5.jpeg")
  pin_10.images.attach(io: image_10, filename:"cat_5.jpeg")
  pin_10.save!

BoardPin.create!(pin_id: pin_1.id, board_id: board_1.id)
BoardPin.create!(pin_id: pin_2.id, board_id: board_1.id)
BoardPin.create!(pin_id: pin_3.id, board_id: board_1.id)
BoardPin.create!(pin_id: pin_4.id, board_id: board_1.id)
BoardPin.create!(pin_id: pin_5.id, board_id: board_1.id)
BoardPin.create!(pin_id: pin_6.id, board_id: board_1.id)
BoardPin.create!(pin_id: pin_7.id, board_id: board_1.id)
BoardPin.create!(pin_id: pin_8.id, board_id: board_1.id)
BoardPin.create!(pin_id: pin_9.id, board_id: board_1.id)
BoardPin.create!(pin_id: pin_10.id, board_id: board_1.id)

pin_11 = Pin.create!(
  title:"Husky Puppy",
  description:"The tongue is sticking out!",
  user_id: user_1.id)

  image_11 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/dog_1.jpeg")
  pin_11.images.attach(io: image_11, filename:"dog_1.jpeg")
  pin_11.save!

pin_12 = Pin.create!(
  title:"German Shepherd Puppy",
  description:"The paws are so cute",
  user_id: demo_user.id)

  image_12 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/dog_2.jpeg")
  pin_12.images.attach(io: image_12, filename:"dog_2.jpeg")
  pin_12.save!

pin_13 = Pin.create!(
  title:"Pomeranian",
  description:"Paw Please!",
  user_id: user_2.id)

  image_13 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/dog_3.jpeg")
  pin_13.images.attach(io: image_13, filename:"dog_3.jpeg")
  pin_13.save!

pin_14 = Pin.create!(
  title:"Dog in the wood",
  description:"",
  user_id: user_1.id)

  image_14 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/dog_4.jpeg")
  pin_14.images.attach(io: image_14, filename:"dog_4.jpeg")
  pin_14.save!

pin_15 = Pin.create!(
  title:"FluffyBall",
  description:"This is a dog!",
  user_id: user_2.id)

  image_15 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/dog_5.jpeg")
  pin_15.images.attach(io: image_15, filename:"dog_5.jpeg")
  pin_15.save!

pin_16 = Pin.create!(
  title:"White Pomeranian Dog",
  description:"Checking the size!",
  user_id: user_1.id)

  image_16 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/dog_6.jpeg")
  pin_16.images.attach(io: image_16, filename:"dog_6.jpeg")
  pin_16.save!
  

BoardPin.create!(pin_id: pin_11.id, board_id: board_2.id)
BoardPin.create!(pin_id: pin_12.id, board_id: board_2.id)
BoardPin.create!(pin_id: pin_13.id, board_id: board_2.id)
BoardPin.create!(pin_id: pin_14.id, board_id: board_2.id)
BoardPin.create!(pin_id: pin_15.id, board_id: board_2.id)
BoardPin.create!(pin_id: pin_16.id, board_id: board_2.id)


pin_17 = Pin.create!(
  title:"Brown Bunny",
  description:"Round cheeks",
  user_id: user_2.id)

  image_17 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/bunny_1.jpeg")
  pin_17.images.attach(io: image_17, filename:"bunny_1.jpeg")
  pin_17.save!

pin_18 = Pin.create!(
  title:"Bunny Tongue",
  description:"",
  user_id: demo_user.id)

  image_18 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/bunny_2.jpeg")
  pin_18.images.attach(io: image_18, filename:"bunny_2.jpeg")
  pin_18.save!

pin_19 = Pin.create!(
  title:"Bunny Standing",
  description:"Cute bunny standing on a table",
  user_id: demo_user.id)

  image_19 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/bunny_3.jpeg")
  pin_19.images.attach(io: image_19, filename:"bunny_3.jpeg")
  pin_19.save!

BoardPin.create!(pin_id: pin_17.id, board_id: board_3.id)
BoardPin.create!(pin_id: pin_18.id, board_id: board_3.id)
BoardPin.create!(pin_id: pin_19.id, board_id: board_3.id)

pin_20 = Pin.create!(
  title:"White bird",
  description:"White bird on the branch",
  user_id: user_2.id)

  image_20 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/bird_1.jpeg")
  pin_20.images.attach(io: image_20, filename:"bird_1.jpeg")
  pin_20.save!

pin_21 = Pin.create!(
  title:"Pink bird",
  description:"The flowers are photoshopped",
  user_id: user_1.id)

  image_21 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/bird_2.jpeg")
  pin_21.images.attach(io: image_21, filename:"bird_2.jpeg")
  pin_21.save!

pin_22 = Pin.create!(
  title:"BlueJay",
  description:"Not the baseball team",
  user_id: demo_user.id)

  image_22 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/bird_3.jpeg")
  pin_22.images.attach(io: image_22, filename:"bird_3.jpeg")
  pin_22.save!

BoardPin.create!(pin_id: pin_20.id, board_id: board_4.id)
BoardPin.create!(pin_id: pin_21.id, board_id: board_4.id)
BoardPin.create!(pin_id: pin_22.id, board_id: board_4.id)

pin_23 = Pin.create!(
  title:"Pink Pig ",
  description:"Look at that nose and tongue",
  user_id: user_2.id)

  image_23 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/pig_1.jpeg")
  pin_23.images.attach(io: image_23, filename:"pig_1.jpeg")
  pin_23.save!

  pin_24 = Pin.create!(
    title:"Laying on the ground ",
    description:"My mood right now",
    user_id: demo_user.id)
  
    image_24 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/pig_2.jpeg")
    pin_24.images.attach(io: image_24, filename:"pig_2.jpeg")
    pin_24.save!

BoardPin.create!(pin_id: pin_23.id, board_id: board_5.id)
BoardPin.create!(pin_id: pin_24.id, board_id: board_5.id)


BoardPin.create!(pin_id: pin_1.id, board_id: board_6.id)
BoardPin.create!(pin_id: pin_11.id, board_id: board_6.id)
BoardPin.create!(pin_id: pin_18.id, board_id: board_6.id)


# pin_18_1 = Pin.create!(
#   title:"Bunny Tongue",
#   description:"",
#   user_id: demo_user.id,
#   board_id: board_6.id)

#   image_18 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/bunny_2.jpeg")
#   pin_18_1.images.attach(io: image_18, filename:"bunny_2.jpeg")
#   pin_18_1.save!

# pin_11_1 = Pin.create!(
#   title:"Husky Puppy",
#   description:"The tongue is sticking out!",
#   user_id: user_1.id,
#   board_id: board_6.id)

#   image_11 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/dog_1.jpeg")
#   pin_11_1.images.attach(io: image_11, filename:"dog_1.jpeg")
#   pin_11_1.save!

# pin_1_1 = Pin.create!(
#     title:"Cat",
#     description:"Cat trying to touch its legs",
#     user_id: demo_user.id,
#     board_id: board_6.id )
  
#     image_1 = URI.open("https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+images/cat.jpeg")
#     pin_1_1.images.attach(io: image_1, filename:"cat.jpeg")
#     pin_1_1.save!

puts "Done!"
