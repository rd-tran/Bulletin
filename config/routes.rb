# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[index show create update]
    resources :posts, only: %i[index show create update destroy]
    resources :comments, only: %i[create update destroy]
    resource :session, only: %i[create destroy]
  end
end
