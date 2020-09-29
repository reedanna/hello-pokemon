class PokemonTypesController < ApplicationController

    def index
        pokemon_types = PokemonType.all

        render json: pokemon_types, include: [:pokemon, :type]
    end

    def show
        pokemon_type = PokemonType.find(params[:id])

        render json: pokemon_type, include: [:pokemon, :type]
    end

end
