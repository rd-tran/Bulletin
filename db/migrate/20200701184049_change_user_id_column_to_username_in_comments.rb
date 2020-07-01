class ChangeUserIdColumnToUsernameInComments < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :author_id, :author_username
  end
end
