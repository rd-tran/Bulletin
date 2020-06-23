class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :username, null: false
      t.string :email, null: false
      t.date :birthday, null: false
      t.string :gender, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :bio
      t.string :work
      t.string :education
      t.string :hometown
      t.string :relationship_status_id
      t.string :name_pronunciation
      t.string :website
      t.timestamps
    end

    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
