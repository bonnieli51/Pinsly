class Api::BoardPinsController < ApplicationController

    def index
        if params[:board_id]
            board = Board.find_by(id: params[:board_id])
            @pins = board.pins
            render '/api/pins/index'
        else 
            @pins = {}
            Board.all.ids.each do |boardId| 
                board = Board.find_by(id: boardId)
                @pins[boardId] = board.pins
            end
            render '/api/pins/indexall'
        end
    end

    def create
        board_pin = BoardPin.new(board_pins_params)
        if board_pin.save
            render json: {errors: "Saving Successful"}, status: 201
        else
            render json: {errors: board_pin.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def check 
        board_pin = BoardPin.find_by(board_id: params[:board_id], pin_id: params[:pin_id])
        if board_pin 
            render json:{message: "found"}
        else 
            render json:{message: ""}
        end

    end

    def unsave
       @boardpin = BoardPin.find_by(board_id: params[:board_id], pin_id: params[:pin_id])
        if @boardpin
            @boardpin.destroy
            render json: {message: "Pin deleted"}
        end
    end

    private

    def board_pins_params
        params.require(:board_pin).permit(:board_id, :pin_id)
    end
end
