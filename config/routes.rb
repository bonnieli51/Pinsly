Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy] 
    resources :users, only: :create do 
      resources :boards, only: [:index] 
      #   resources :pins, only: []
      # end
    end
    resources :boards, only: [:show, :create, :destroy, :update] do 
      resources :pins, only: [:create, :destroy, :update,:index, :show]
      # pins create need to be nested bc the user can choose which board. cant use url params
    end
  end
  get '*path', to: "static_pages#frontend_index"
end
