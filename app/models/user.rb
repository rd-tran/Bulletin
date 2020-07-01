# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  bio                    :string
#  birthday               :string           not null
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

class User < ApplicationRecord
  include BCrypt

  validates :fname, :lname, :username, :email, :birthday, :gender,
            :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :gender, inclusion: %w[Male Female]

  after_initialize :ensure_session_token, :ensure_username, :ensure_capitalized

  has_many :authored_posts,
           primary_key: :username,
           foreign_key: :author_username,
           class_name: :Post

  has_many :board_posts,
           primary_key: :username,
           foreign_key: :board_username,
           class_name: :Post

  has_many :comments,
           foreign_key: :author_id,
           class_name: :Comment

  has_many :friendships,
           foreign_key: :friender_id

  has_many :friends,
           through: :friendships,
           source: :friend

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user&.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = Password.create(password)
  end

  def is_password?(password)
    Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
    session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_username
    self.username ||= SecureRandom.urlsafe_base64
  end

  def ensure_capitalized
    self.fname ||= self.fname.capitalize if fname
    self.lname ||= self.lname.capitalize if lname
  end
end
