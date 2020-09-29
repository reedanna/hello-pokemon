class Pokemon < ApplicationRecord
    has_many :pokemon_types
    has_many :pokemon_teams
    has_many :teams, through: :pokemon_teams
    has_many :types, through: :pokemon_types
end
