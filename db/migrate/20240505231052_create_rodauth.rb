class CreateRodauth < ActiveRecord::Migration[7.1]
  def change
    enable_extension "citext"

    create_table :users do |t|
      t.integer :status, null: false, default: 1
      t.citext :username, null: false
      t.index :username, unique: true, where: "status IN (1)"
      t.string :password_hash
    end

    # # Used by the password reset feature
    # create_table :user_password_reset_keys, id: false do |t|
    #   t.bigint :id, primary_key: true
    #   t.foreign_key :users, column: :id
    #   t.string :key, null: false
    #   t.datetime :deadline, null: false
    #   t.datetime :email_last_sent, null: false, default: -> { "CURRENT_TIMESTAMP" }
    # end

    # # Used by the account verification feature
    # create_table :user_verification_keys, id: false do |t|
    #   t.bigint :id, primary_key: true
    #   t.foreign_key :users, column: :id
    #   t.string :key, null: false
    #   t.datetime :requested_at, null: false, default: -> { "CURRENT_TIMESTAMP" }
    #   t.datetime :email_last_sent, null: false, default: -> { "CURRENT_TIMESTAMP" }
    # end
  end
end
