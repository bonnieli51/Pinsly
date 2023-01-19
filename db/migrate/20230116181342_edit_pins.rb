class EditPins < ActiveRecord::Migration[7.0]
  def change
    remove_column :pins, :board_id
  end
end
