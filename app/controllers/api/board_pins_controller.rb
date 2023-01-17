class Api::BoardPinsController < ApplicationController

    def index
        if params[:board_id]
            board = Board.find_by(id: params[:board_id])
            @pins = board.pins
            render '/api/pins/index'
        else 
            render json: { errors: ["Error"] }, status: :unprocessable_entity
        end

    end

    def create

    end

    def destroy

    end

    private

    def board_pins_params
        params.require(:board_pin).permit(:board_id, :pin_id)
    end
end
