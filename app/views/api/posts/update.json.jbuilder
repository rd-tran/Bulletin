json.extract! @post,
                :id, :author_username, :board_username, :body, :created_at
json.photoUrl url_for(@post.photo) if @post.photo.attached?