# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create(
  fname: 'Test', lname: 'Account', email: 'demo@gmail.com',
  password: 'password', birthday: '01/01/1985', gender: 'Male'
)

ryan = User.create(
  fname: 'Ryan', lname: 'Tran', email: 'r.tran@gmail.com',
  password: 'password', birthday: '09/12/1994', gender: 'Male'
)

mochi = User.create(
  fname: 'Mochi', lname: 'Pomchi', email: 'mochi.pomchi@gmail.com',
  password: 'it$Moch1', birthday: '10/14/2018', gender: 'Male'
)

Friendship.create(friender_id: demo.id, friended_id: ryan.id)
Friendship.create(friender_id: ryan.id, friended_id: demo.id)
Friendship.create(friender_id: ryan.id, friended_id: mochi.id)
Friendship.create(friender_id: mochi.id, friended_id: ryan.id)

Post.create(
  author_id: demo.id,
  board_id: ryan.id,
  body: 'This is the very first post'
)
Post.create(author_id: ryan.id, board_id: mochi.id, body: 'Hey, buddy!')
