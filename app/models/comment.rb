# frozen_string_literal: true

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
class Comment < ApplicationRecord
  validates :author_username, :post_id, :body, presence: true

  belongs_to :author,
             primary_key: :username,
             foreign_key: :author_username,
             class_name: :User

  belongs_to :post,
             foreign_key: :post_id,
             class_name: :Post
end
