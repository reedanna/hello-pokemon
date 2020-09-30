Rails.application.routes.draw do
  resources :users
  resources :pokemon_teams
  resources :teams
  resources :pokemon_types
  resources :types
  resources :pokemons
  post '/login', to: 'auth#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
