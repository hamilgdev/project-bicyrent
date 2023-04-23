class CreateBicycles < ActiveRecord::Migration[7.0]
  def change
    create_table :bicycles, id: false do |t|
      t.references :user, foreign_key: { primary_key: :uid }, index: true, type: :string

      t.string :uid
      t.string :color
      t.string :model
      t.string :latitude
      t.string :length
      # t.references :user, null: false, foreign_key: true

      t.timestamps
    end
    execute 'ALTER TABLE bicycles ADD PRIMARY KEY (uid);'
  end
end
