# frozen_string_literal: true

class Api::UsersController < ApplicationController
  def index
  end

  def show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :create
    else
      render json: @user.errors.full_messages, status: 402
    end
  end

  def update
  end

  private

  def user_params
    params.require(:user).permit(
      :fname, :lname, :username, :email, :password, :birthday, :gender
    )
  end
end
