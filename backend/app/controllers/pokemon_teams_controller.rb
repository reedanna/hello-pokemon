class PokemonTeamsController < ApplicationController

    def index
        pokemonTeams = PokemonTeam.all

        render json: pokemonTeams.to_json, include: [:pokemon, :team]
    end

    def show
        pokemonTeam = PokemonTeam.find(params[:id])

        render json: pokemonTeam.to_json, include: [:pokemon, :team]
    end

    def create
        pokemonTeam = PokemonTeam.new(pokemon_team_params)
        pokemonTeam.save
    end

    def update
        pokemonTeam = PokemonTeam.find(params[:id])
        pokemonTeam.update(params)
    end

    def destroy
        pokemonTeam = PokemonTeam.find(params[:id])
        pokemonTeam.destroy
    end

    private
    def pokemon_team_params
        params.require(:pokemon_team).permit(:team_id, :pokemon_id)
    end

end
