class Api::BoardsController < ApplicationController
    before_action :require_logged_in

    def index
        @boards = Board.where(user_id: params[:user_id])
        render :index
    end

    def show 
        @board = Board.find(params[:id])
        render :show
    end

    def create
        @board = Board.new(board_params)
        @board.user_id = current_user.id 
      
        if @board.save
            render :show
        else 
            render json: {errors: @board.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @board = Board.find(params[:id])
        if @board && @board.user_id == current_user.id
            @board.destroy
            # render json: {message: "Board deleted!"}
        # else 
        #     render json: {message: "Unauthorized"}, status: :unauthorized
        end
    end

    def update
        @board = Board.find(params[:id])
        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages
        end
    end

    private

    def board_params
        params.require(:board).permit(:name, :description)
    end
end
