class ApplicationController < ActionController::API

  private
  
  def current_user
    rodauth.rails_user
  end
end
