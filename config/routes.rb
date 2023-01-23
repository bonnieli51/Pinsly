Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy] 
    resources :users, only: [:create, :show] do 
      resources :boards, only: [:index] 
      #   resources :pins, only: []
      # end
    end
    resources :boards, only: [:show, :create, :destroy, :update] do 
      resources :pins, only: [:create, :destroy, :update,:index]
      resources :board_pins, only: [:index]
      # pins create need to be nested bc the user can choose which board. cant use url params
    end
    resources :pins, only:[:index, :show] do
      resources :comments, only: [:index]
    end
    resources :board_pins, only: [:index, :create, :destroy]
    resources :comments, only: [:create, :destroy]
    
  end
  get '*path', to: "static_pages#frontend_index"
end
