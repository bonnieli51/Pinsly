class CreateBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.text :description
      t.references :user, null: false, index: true, foreign_key: {to_table: :users}
      t.timestamps
    end
    add_index :boards, [:user_id, :name], unique: true
  end
end
