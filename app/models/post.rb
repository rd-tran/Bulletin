# frozen_string_literal: true

# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  board_id   :integer          not null
#
# Indexes
#
#  index_posts_on_author_id  (author_id)
#  index_posts_on_board_id   (board_id)
#
class Post < ApplicationRecord
  validates :author_id, :board_id, presence: true
  belongs_to :author,
             foreign_key: :author_id,
             class_name: :User

  belongs_to :board,
             foreign_key: :board_id,
             class_name: :User
end
