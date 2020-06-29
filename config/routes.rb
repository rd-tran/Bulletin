# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[index show create update]
    resources :posts, only: %i[index show create update delete]
    resource :session, only: %i[create destroy]
  end
end
