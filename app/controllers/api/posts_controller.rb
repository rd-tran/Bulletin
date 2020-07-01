# frozen_string_literal: true

class Api::PostsController < ApplicationController
  def index
    user = User.find_by(username: params[:username])
    if params[:type] == 'newsfeed'
      friend_usernames = user.friends.map(&:username)
      usernames = [user.username, *friend_usernames]
      @posts = Post.includes(:author).where(author_username: [usernames])
                   .or(Post.includes(:author)
                      .where(board_username: [usernames]))
    elsif params[:type] == 'board'
      @posts = Post.includes(:author).where(board_username: user.username)
    else
      render json: ['invalid type'], status: 422
    end

    render :index
  end

  def create
    @post = Post.create(post_params)
    render json: @post
  end

  def update
    @post = Post.find_by(id: post_params[:id])
    @post.update(post_params)
    render json: @post
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: @post.id
  end

  private

  def post_params
    params.require(:post).permit(
      :id, :author_username, :board_username, :body, :created_at)
  end
end
