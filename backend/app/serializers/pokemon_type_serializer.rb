class PokemonTypeSerializer < ActiveModel::Serializer
  attributes :id, :pokemon_id, :type_id
end
