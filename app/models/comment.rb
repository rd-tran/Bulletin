# frozen_string_literal: true

# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  post_id    :integer          not null
#
# Indexes
#
#  index_comments_on_author_id  (author_id)
#  index_comments_on_post_id    (post_id)
#
class Comment < ApplicationRecord
  validates :author_id, :post_id, :body, presence: true

  belongs_to :author,
             foreign_key: :author_id,
             class_name: :User

  belongs_to :post,
             foreign_key: :post_id,
             class_name: :Post
end
