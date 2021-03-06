# frozen_string_literal: true

json.user do
  json.extract! @user,
                :id, :fname, :lname, :username, :email, :birthday, :gender,
                :bio, :work, :education, :hometown,
                :relationship_status_id, :name_pronunciation, :website,
                :friends_arr
end

json.friends do
  @user.friends.each do |friend|
    json.set! friend.username do
      json.extract! friend, :id, :fname, :lname, :username
      json.friends_arr friend.friends.map(&:username)
    end
  end
end
