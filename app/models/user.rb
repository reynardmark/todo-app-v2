class User < ApplicationRecord
  include Rodauth::Rails.model
  enum :status, activated: 1, deactivated: 2
end
