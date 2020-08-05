# frozen_string_literal: true

class Api::UsersController < ApplicationController
  def index
    user = User.find_by(username: params[:username])
    friend_usernames = user.friends.map(&:username)
    posts_on_usernames = user.friends.map(&:authored_posts)
                             .flatten.map(&:board_username)
    posts_by_usernames = user.friends.map(&:board_posts)
                             .flatten.map(&:author_username)
    usernames = [
      user.username,
      *friend_usernames,
      *posts_on_usernames,
      *posts_by_usernames
    ].uniq

    @users = User.where(username: [usernames])
    render :index
  end

  def show
    @user = User.find_by(username: params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :create
    else
      errors = @user.errors.messages.keys.map do |key|
        case key
        when :fname
          [key.to_s, "What's your name?"]
        when :lname
          [key.to_s, "What's your name?"]
        when :email
          [
            key.to_s,
            "This email is either invalid, or taken. You'll need this when you log in, so try another one."
          ]
        when :password
          [
            key.to_s,
            'Enter a combination of at least six numbers, letters and punctuation marks (like ! and &)'
          ]
        when :birthday
          [
            key.to_s,
            'Select your birthday. You can change who can see this later.'
          ]
        when :gender
          [
            key.to_s,
            'Please choose a gender. You can change who can see this later.'
          ]
        end
      end

      render json: errors.to_h, status: 422
    end
  end

  def update; end

  private

  def user_params
    params.require(:user).permit(
      :fname, :lname, :username, :email, :password, :birthday, :gender
    )
  end
end
