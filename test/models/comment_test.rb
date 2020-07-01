# == Schema Information
#
# Table name: comments
#
#  id              :bigint           not null, primary key
#  author_username :string           not null
#  body            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  post_id         :integer          not null
#
# Indexes
#
#  index_comments_on_author_username  (author_username)
#  index_comments_on_post_id          (post_id)
#
require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
