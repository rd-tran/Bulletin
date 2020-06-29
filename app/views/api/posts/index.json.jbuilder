# frozen_string_literal: true
json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post,
                    :id, :author_username, :board_username, :body, :created_at
    end
  end
end

json.users do
  @posts.each do |post|
    json.set! post.author.username do
      json.extract! post.author, :id, :fname, :lname, :username
    end
    json.set! post.board.username do
      json.extract! post.board, :id, :fname, :lname, :username
    end
  end
end
