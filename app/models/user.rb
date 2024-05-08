class User < ApplicationRecord
  include Rodauth::Rails.model
  enum :status, activated: 1, deactivated: 2

  has_many :categories, dependent: :destroy
  has_many :tasks, through: :categories
end
