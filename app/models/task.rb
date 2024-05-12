class Task < ApplicationRecord
  belongs_to :user

  validates :name, presence: true

  scope :sorted_by_last_created_at, -> {order(:created_at)}
end
