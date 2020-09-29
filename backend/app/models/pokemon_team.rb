class PokemonTeam < ApplicationRecord
    belongs_to :pokemon
    belongs_to :team
end
