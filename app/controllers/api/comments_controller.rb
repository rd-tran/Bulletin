class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_username = current_user.username
    @comment.save
    render json: @comment
  end

  def update
    if current_user.username == comment_params[:author_username]
      @comment = Comment.find_by(id: comment_params[:id])
      @comment.update(comment_params)
      render json: @comment
    else
      render json: ["Can't edit this comment"], status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if current_user.username == @comment.author_username
      @comment.destroy
      render json: @comment.id
    else
      render json: ["Can't delete this comment"], status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(
      :id, :author_id, :post_id, :body, :created_at
    )
  end
end
