class Api::BoardsController < ApplicationController
    before_action :require_logged_in
    

    def index
        #needs to refactor to shows all boards for specific user. Not all boards in DB
        @boards = Board.where(user_id: params[:user_id])
        # render json: @boards
        render :index
    end

    def show 
        @board = Board.find(params[:id])
        render :show
    end

    # def create
    #     @board = Board.new(board_params)
    #     if @board.save
    #         render :show
    #     else 
    #         render json {errors: @board.errors.full_messages}, status:  :unprocessable_entity
    #     end
    # end

    def destroy

    end

    private

    def board_params
        params.require(:board).permit(:name, :description, :user_id)
    end
end
