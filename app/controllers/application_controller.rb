class ApplicationController < ActionController::API
  # before_action :set_jwt_token

  private
  
  def set_jwt_token
    if rodauth.use_jwt? && rodauth.valid_jwt?
      response.headers["Authorization"] = rodauth.session_jwt
    end
  end
end
