# frozen_string_literal: true

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
class Friendship < ApplicationRecord
  validates :friender_id, :friended_id, presence: true
  validates :friender_id, uniqueness: { scope: :friended_id }

  belongs_to :friender,
             foreign_key: :friender_id,
             class_name: :User

  belongs_to :friend,
             foreign_key: :friended_id,
             class_name: :User
end
