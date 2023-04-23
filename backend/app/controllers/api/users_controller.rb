# frozen_string_literal: true

module Api
  class UsersController < ApplicationController
    def authenticate
      user = find_by_email
      if user.present?
        user.update_token
        render json: user, status: :ok
      else
        user = create_user
        render json: user, status: :created
      end
    end

    def logout
      user = User.find_by(email: params[:email])

      user.revoke_token
      render json: { status: :ok }
    end

    private

    def create_user
      user = User.new(user_params)
      user.save!
      user.update_token

      user
    end

    def find_by_email
      return false unless valid_params?

      User.find_by(email: params[:email])
    end

    def user_params
      params.require(:user).permit(:full_name, :email, :avatar_url)
    end

    def valid_params?
      user_params[:full_name].present? && user_params[:email].present? && user_params[:avatar_url].present?
    end
  end
end
