# frozen_string_literal: true

class Api::PostsController < ApplicationController
  def index
    user = User.find_by(username: params[:username])
    if params[:type] == 'newsfeed'
      friend_usernames = user.friends.map(&:username)
      usernames = [user.username, *friend_usernames]
      @posts = Post.where(author_username: [usernames])
                   .or(Post.where(board_username: [usernames]))
    elsif params[:type] == 'board'
      @posts = Post.where(board_username: user.username)
    else
      render json: ['invalid type'], status: 422
    end

    render :index
  end

  private

  def post_params
    params.require(:post).permit(:author_username, :board_username)
  end
end
