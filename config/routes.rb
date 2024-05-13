Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :tasks, except: :show
      delete :tasks, to: 'tasks#destroy_all'
    end
  end


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  # get "up" => "rails/health#show", as: :rails_health_check


  if ENV["RAILS_SERVE_STATIC_FILES"].present?
    get "*path", to: static("index.html")
    post "*path", to: static("index.html")
  end
end
