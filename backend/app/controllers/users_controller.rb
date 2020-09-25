class UsersController < ApplicationController

    def index
        users = User.all

        render json: users.to_json
    end

    def show
        user = User.find(params[:id])

        render json: user.to_json
    end

    def create
        user = User.new(user_params)
        team.save
    end

    def update
        user = User.find(params[:id])
        user.update(params)
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end

    private
    def user_params
        params.require(:team).permit(:name, :password)
    end

end
