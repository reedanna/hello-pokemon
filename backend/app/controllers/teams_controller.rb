class TeamsController < ApplicationController

    def index
        teams = Team.all

        render json: teams.to_json
    end

    def show
        team = Team.find(params[:id])

        render json: team.to_json
    end

    def create
        team = Team.new(team_params)
        team.save
    end

    def update
        team = Team.find(params[:id])
        team.update(params)
    end

    def destroy
        team = Team.find(params[:id])
        team.destroy
    end

    private
    def team_params
        params.require(:team).permit(:name, :user_id)
    end

end
