# frozen_string_literal: true
json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post,
                    :id, :author_username, :board_username, :body, :created_at
      json.photoUrl url_for(post.photo) if post.photo.attached?
    end
  end
end

json.comments do
  @posts.each do |post|
    post.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment,
                      :id, :author_username, :post_id, :body, :created_at
      end
    end
  end
end

json.users do
  @posts.each do |post|
    json.set! post.author.username do
      json.extract! post.author, :id, :fname, :lname, :username
      json.friends_arr post.author.friends.map(&:username)
    end

    json.set! post.board.username do
      json.extract! post.board, :id, :fname, :lname, :username
      json.friends_arr post.board.friends.map(&:username)
    end

    post.comments.each do |comment|
      json.set! comment.author.username do
        json.extract! comment.author, :id, :fname, :lname, :username
        json.friends_arr comment.author.friends.map(&:username)
      end
    end
  end
end
