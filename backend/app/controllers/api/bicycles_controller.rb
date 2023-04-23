# fronzen_string_literal: true

module Api
  # Manages health checks for the application.
  #
  # Controller that handles requests related to bicycles in the application.
  # This controller handles creating, reading, updating, and deleting bicycles, as well as operations
  # related to reserving bicycles.
  #
  # See the README for more information.
  class BicyclesController < ApplicationController
    before_action :authenticate_user!, only: %i[create update destroy]

    # GET /bicycles
    def index
      bicycles = Bicycle.includes(:user).all

      # TO DO verificar si esto funciona
      if !params[:search].nil? && !params[:search].present?
        bicycles = Search::Bicycle.search(@bicycles, params[:search])
      end

      render json: bicycles, status: :ok
    end

    # GET /bicycles/:id
    def show
      bicycle = Bicycle.find(params[:id])
      render json: bicycle, status: :ok
    end

    # POST /bicycles
    def create
      return head :unprocessable_entity unless valid_params?

      bicycle = Current.user.bicycle.new(bicycle_params)
      if bicycle.save!
        render json: bicycle, status: :created
      else
        head :unprocessable_entity
      end
    end

    # PATCH/PUT /bicycles/:id
    def update
      return head :unprocessable_entity unless valid_params?

      bicycle = Current.user.bicycle.find(params[:id])
      if bicycle.update(bicycle_params)
        render json: bicycle, status: :ok
      else
        head :unprocessable_entity
      end
    end

    # DELETE /bicycles/1
    def destroy
      bicycle = Current.user.bicycle.find(params[:id])
      bicycle.destroy
      head :no_content
    end

    private

    # Only allow a trusted parameter "white list" through.
    def bicycle_params
      params.require(:bicycle)
            .permit(:color, :model, :latitude, :length)
    end

    def valid_params?
      bicycle_params[:color].present? &&
        bicycle_params[:model].present? &&
        bicycle_params[:latitude].present? &&
        bicycle_params[:length].present?
    end
  end
end
