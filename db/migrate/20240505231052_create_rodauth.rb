class CreateRodauth < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.integer :status, null: false, default: 1
      t.string :username, null: false
      t.index :username, unique: true, where: "status IN (1)"
      t.string :password_hash
    end
  end
end
