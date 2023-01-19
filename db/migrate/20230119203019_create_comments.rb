class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.text :description
      t.references :pin, null: false, index: true, foreign_key: {to_table: :pins}
      t.references :user, null: false, index: true, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
