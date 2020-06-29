# frozen_string_literal: true

@posts.each do |post|
  json.set! post.id do
    json.extract! post,
                  :id, :author_username, :board_username, :body, :created_at
  end
end
