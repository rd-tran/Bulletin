# frozen_string_literal: true
json.extract! @user,
              :id, :fname, :lname, :username, :email, :birthday, :gender,
              :bio, :work, :education, :hometown,
              :relationship_status_id, :name_pronunciation, :website
