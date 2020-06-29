class ChangeUserIdToBoardIdInPostsTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :posts, :user_id, :board_id
  end
end
