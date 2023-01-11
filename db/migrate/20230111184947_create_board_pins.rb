class CreateBoardPins < ActiveRecord::Migration[7.0]
  def change
    create_table :board_pins do |t|
      t.references :board, null: false, index: true, foreign_key: {to_table: :boards}
      t.references :pin, null: false, index: true, foreign_key: {to_table: :pins}
      t.timestamps
    end
    add_index :board_pins, [:pin_id, :board_id], unique: true
  end
end
