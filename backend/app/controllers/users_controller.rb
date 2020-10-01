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
<<<<<<< HEAD
        user.save
        token = encode_token(user_id: user.id)
=======
        token = encode_token(user_id: user.id)

        if user.valid?
            user.save
            render json: user.to_json
        else
            render json: "This request is invalid. Please choose a unique username.".to_json
        end
>>>>>>> 725829ee8ab49d42a2b6cbcd8b2f50a4754f6e26
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
