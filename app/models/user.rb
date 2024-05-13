class User < ApplicationRecord
  include Rodauth::Rails.model
  before_create :downcase_username
  enum :status, activated: 1, deactivated: 2

  has_many :tasks, dependent: :destroy

  private

  def downcase_username
    self.username.downcase
  end
end
