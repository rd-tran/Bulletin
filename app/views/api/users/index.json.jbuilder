# frozen_string_literal: true

@users.each do |user|
  json.set! user.username do
    json.extract! user, :id, :fname, :lname, :username
    json.friends_arr user.friends.map(&:username)
  end
end
