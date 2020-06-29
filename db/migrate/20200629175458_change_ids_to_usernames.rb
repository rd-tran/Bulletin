class ChangeIdsToUsernames < ActiveRecord::Migration[5.2]
  def change
    rename_column :posts, :author_id, :author_username
    change_column :posts, :author_username, :string
    rename_column :posts, :board_id, :board_username
    change_column :posts, :board_username, :string
  end
end
