class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :friender_id, null: false
      t.integer :friended_id, null: false
      t.timestamps
    end

    add_index :friendships, %i[friender_id friended_id], unique: true
  end
end
