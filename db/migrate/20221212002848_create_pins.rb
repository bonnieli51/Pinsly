class CreatePins < ActiveRecord::Migration[7.0]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.text :description
      t.references :user, null: false, index: true, foreign_key: {to_table: :users}
      t.references :board, null: false, index: true, foreign_key: {to_table: :boards}
      t.timestamps
    end
  end
end
