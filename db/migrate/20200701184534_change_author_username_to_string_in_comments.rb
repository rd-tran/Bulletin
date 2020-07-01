class ChangeAuthorUsernameToStringInComments < ActiveRecord::Migration[5.2]
  def change
    change_column :comments, :author_username, :string
  end
end
