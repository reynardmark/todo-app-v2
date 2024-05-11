class ApplicationController < ActionController::API

  
  private
  
  # check authorization header
  def authenticate
    rodauth.require_account
  end

  # gets the current logged in user
  def current_user
    rodauth.rails_account
  end
end
