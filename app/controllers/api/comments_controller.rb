class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.where(pin_id: params[:pin_id])
        render :index
    end

    def create
        comment = Comment.new(comment_params)
        comment.user_id = current_user.id
        @comments = Comment.where(pin_id: params[:pin_id])
        if @comment.save
            render :index
        else
            render json: {errors: @index_comments_on_pin_id.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy 
    end

    private 
    
    def comment_params
        params.require(:comment).permit(:description, :pin_id)
    end
end
