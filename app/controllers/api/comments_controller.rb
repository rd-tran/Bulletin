class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.username
    @comment.save
    render json: @comment
  end

  def update
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(
      :id, :author_id, :post_id, :body, :created_at
    )
  end
end
