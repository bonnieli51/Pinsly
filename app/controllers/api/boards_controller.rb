class Api::BoardsController < ApplicationController
    before_action :require_logged_in, only: [:create, :show, :destroy]
    

    def index
    end

    def show 
        @board = Board.find(params[:id])
        render :show
    end

    def create
        @board = Board.new(board_params)
        if @board.save
            render :show
        else 
            render json {errors: @board.errors.full_messages}, status:  :unprocessable_entity
        end
    end

    def destroy

    end

    private

    def board_params
        params.require(:board).permit(:name, :description, :user_id)
    end
end
