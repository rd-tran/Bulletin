json.extract! user, :id, :fname, :lname, :username
json.friends_arr user.friends.map(&:username)