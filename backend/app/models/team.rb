class Team < ApplicationRecord
    has_many :pokemon_teams
    has_many :pokemons, through: :pokemon_teams
    belongs_to :user
end
