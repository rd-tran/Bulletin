# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  bio                    :string
#  birthday               :date             not null
#  education              :string
#  email                  :string           not null
#  fname                  :string           not null
#  gender                 :string           not null
#  hometown               :string
#  lname                  :string           not null
#  name_pronunciation     :string
#  password_digest        :string           not null
#  session_token          :string           not null
#  username               :string           not null
#  website                :string
#  work                   :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  relationship_status_id :string
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
