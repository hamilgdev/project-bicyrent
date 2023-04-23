# frozen_string_literal: true

module Api
  # Manages health checks for the application.
  #
  # This controller provides endpoints for performing health checks on the
  # various components of the application. It can be used to determine whether
  # the application is running correctly and to diagnose issues when it is not.
  #
  # Example usage:
  #
  #   GET /healthcheck => 200 OK
  #   GET /healthcheck/db => 200 OK
  #   GET /healthcheck/cache => 200 OK
  #
  # See the README for more information.
  class HealthController < ApplicationController
    def check
      render json: { api: 'ok' }, status: :ok
    end

    def db
      ActiveRecord::Base.connection
      render json: { db: 'ok' }, status: :ok
    rescue StandardError
      render json: { db: 'error' }, status: :internal_server_error
    end

    def cache
      Rails.cache.write('healthcheck', 'ok')
      Rails.cache.read('healthcheck')
      render json: { cache: 'ok' }, status: :ok
    rescue StandardError
      render json: { cache: 'error' }, status: :internal_server_error
    end
  end
end
