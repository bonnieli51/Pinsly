class Api::PinsController < ApplicationController
    def index
        # @pins = Pin.where(user_id: params[:user_id])
        # render :index

        @pins = Pin.where(board_id: params[:board_id])
        render :index
    end

    def show 
        @pin = Pin.find(params[:id])
        render :show
    end

    def create
        @pin = Pin.new(pin_params)
        @pin.user_id = current_user.id
        if @pin.save
            render :show
        else 
            render json: {errors: @pin.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @pin = Pin.find(params[:id])
        if @pin && @pin.user_id == current_user.id
            @pin.destroy
            render json: {message: "Pin deleted!"}
        else 
            render json: {message: "Unauthorized"}, status: :unauthorized
        end
    end

    def update
        @pin = Pin.find(params[:id])
        if @pin.update(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages
        end
    end

    private

    def pin_params
        params.require(:pin).permit(:title, :description, :board_id)
    end
end
