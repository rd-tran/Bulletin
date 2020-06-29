@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :author_id, :board_id, :body, :created_at
  end
end
