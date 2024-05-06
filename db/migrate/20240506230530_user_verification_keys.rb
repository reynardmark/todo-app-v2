class UserVerificationKeys < ActiveRecord::Migration[7.1]
  def change
    drop_table :user_verification_keys, id: false do |t|
      t.bigint :id, primary_key: true
      t.foreign_key :users, column: :id
      t.string :key, null: false
      t.datetime :requested_at, null: false, default: -> { "CURRENT_TIMESTAMP" }
      t.datetime :email_last_sent, null: false, default: -> { "CURRENT_TIMESTAMP" }
    end
  end
end
