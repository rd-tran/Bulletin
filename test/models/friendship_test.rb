# == Schema Information
#
# Table name: friendships
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  friended_id :integer          not null
#  friender_id :integer          not null
#
# Indexes
#
#  index_friendships_on_friender_id_and_friended_id  (friender_id,friended_id) UNIQUE
#
require 'test_helper'

class FriendshipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
