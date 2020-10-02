class UsersController < ApplicationController

    def index
        users = User.all

        render json: users.to_json(:include => { :teams => {:include => {:pokemon_teams => {:include => { :pokemon => {:include => :types} } } } } })
    end

    def show
        user = User.find(params[:id])

        render json: user.to_json(:include => { :teams => {:include => {:pokemon_teams => {:include => { :pokemon => {:include => :types} } } } } })
    end

    def create
        user = User.new(user_params)
        token = encode_token(user_id: user.id)

        if user.valid?
            user.save
            render json: user.to_json
        else
            render json: "This request is invalid. Please choose a unique username.".to_json
        end
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
        params.permit(:name, :password)
    end

end
