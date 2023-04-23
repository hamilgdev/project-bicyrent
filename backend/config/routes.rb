# fronzen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # API
  namespace :api do
    get '/healthcheck', to: 'health#check'

    post '/users/authenticate', to: 'users#authenticate'
    post '/users/logout', to: 'users#logout'

    resources :bicycles, only: %i[index show create update destroy]
  end
end
