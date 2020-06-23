# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(
  fname: 'Test', lname: 'Account', email: 'test@gmail.com',
  password: 'password', birthday: '01/01/1985', gender: 'Male'
)

user2 = User.create(
  fname: 'Ryan', lname: 'Tran', email: 'r.tran@gmail.com',
  password: 'password', birthday: '09/12/1994', gender: 'Male'
)

user3 = User.create(
  fname: 'Mochi', lname: 'Luong', email: 'mochi.boy@gmail.com',
  password: 'it$Moch1', birthday: '10/14/2018', gender: 'Male'
)

Friendship.create(friender_id: 2, friended_id: 3)
Friendship.create(friender_id: 3, friended_id: 2)
