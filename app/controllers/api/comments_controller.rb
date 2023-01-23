class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.where(pin_id: params[:pin_id])
        render :index
    end

    def create
        comment = Comment.new(comment_params)
        comment.user_id = current_user.id
        @comments = Comment.where(pin_id: params[:pin_id])
        if comment.save
            render :index
        else
            render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy 
        @comment = Comment.find(params[:id])
        if @comment && @comment.user_id == current_user.id
            @comment.destroy
        end
    end

    private 
    
    def comment_params
        params.require(:comment).permit(:description, :pin_id)
    end
end
