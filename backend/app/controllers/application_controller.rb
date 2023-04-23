# fronzen_string_literal: true

class ApplicationController < ActionController::API
  def authenticate_user!
    if validate_token.present?
      @current_user = User.find_by(auth_token: validate_token)
      head :unauthorized unless @current_user.present?

      Current.user = @current_user
    else
      head :unauthorized
    end
  end

  private

  def validate_token
    token_regex = /Bearer (\w+)/
    header = request.headers['Authorization']
    token = header&.match(token_regex)&.captures&.first

    return nil if invalid_token?(token)

    token
  end

  def invalid_token?(token)
    token.nil? || token.empty? || token == 'null'
  end
end
