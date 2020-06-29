# frozen_string_literal: true

class Api::PostsController < ApplicationController
  def index
    user = User.find_by(username: params[:username])
    if params[:type] == 'newsfeed'
      friend_ids = user.friends.map(&:id)
      user_ids = [user.id, *friend_ids]
      @posts = Post.where(author_id: [user_ids])
                   .or(Post.where(board_id: [user_ids]))
    elsif params[:type] == 'board'
      @posts = Post.where(board_id: user.id)
    else
      render json: ['invalid type'], status: 422
    end
    
    render :index
  end

  private

  def post_params
    params.require(:post).permit(:author_id, :board_id)
  end
end
