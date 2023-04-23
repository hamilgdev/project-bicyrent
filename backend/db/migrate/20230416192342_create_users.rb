class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: false do |t|
      t.string :uid
      t.string :full_name
      t.string :email
      t.string :avatar_url
      t.string :provider
      t.string :auth_token

      t.timestamps
    end
    execute 'ALTER TABLE users ADD PRIMARY KEY (uid);'
  end
end
