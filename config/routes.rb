Rails.application.routes.draw do
 
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy] 
    resources :users, only: [:create, :show] do 
      resources :boards, only: [:index] 
    end
    resources :boards, only: [:show, :create, :destroy, :update] do 
      resources :pins, only: [:create, :destroy, :update,:index]
      resources :board_pins, only: [:index]
    end
    resources :pins, only:[:index, :show] do
      resources :comments, only: [:index]
    end
    resources :board_pins, only: [:index, :create]
    resources :comments, only: [:create, :destroy]
    get '/board_pin/:board_id/:pin_id', to: 'board_pins#check', as: 'check'
    delete '/board_pin/:board_id/:pin_id', to: 'board_pins#unsave', as: 'unsave'
  end
  get '*path', to: "static_pages#frontend_index"
  
end
