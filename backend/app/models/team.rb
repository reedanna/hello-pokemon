class Team < ApplicationRecord
    has_many :pokemon_teams
    has_many :pokemon, through: :pokemon_teams
end
