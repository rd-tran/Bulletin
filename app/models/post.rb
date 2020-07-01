# frozen_string_literal: true

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
class Post < ApplicationRecord
  validates :author_username, :board_username, presence: true

  belongs_to :author,
             primary_key: :username,
             foreign_key: :author_username,
             class_name: :User

  belongs_to :board,
             primary_key: :username,
             foreign_key: :board_username,
             class_name: :User

  has_many :comments,
           foreign_key: :post_id,
           class_name: :Comment
end
