# == Schema Information
#
# Table name: posts
#
#  id              :bigint           not null, primary key
#  author_username :string           not null
#  board_username  :string           not null
#  body            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_posts_on_author_username  (author_username)
#  index_posts_on_board_username   (board_username)
#
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
